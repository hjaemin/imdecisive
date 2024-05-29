const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const sessions = {};

// Generate a 6-digit code
function generateSessionId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

app.post('/create-session', (req, res) => {
    const sessionId = generateSessionId();
    sessions[sessionId] = { selections: [], totalUsers: 0, completedUsers: 0 };
    console.log('Created session with ID:', sessionId);
    res.json({ sessionId });
});

app.post('/join-session', (req, res) => {
    const { sessionId } = req.body;
    console.log('Attempting to join session with ID:', sessionId);
    if (!sessions[sessionId]) {
        console.log('Failed to join: Session not found with ID:', sessionId);
        return res.status(404).json({ error: 'Session not found' });
    }
    sessions[sessionId].totalUsers += 1;
    console.log('Joined session with ID:', sessionId, 'Total users now:', sessions[sessionId].totalUsers);
    res.json({ message: 'Joined session', totalUsers: sessions[sessionId].totalUsers, completedUsers: sessions[sessionId].completedUsers });
});

app.post('/submit-selection', (req, res) => {
    const { sessionId, userId, selections } = req.body;
    if (!sessions[sessionId]) {
        return res.status(404).json({ error: 'Session not found' });
    }
    sessions[sessionId].selections.push({ userId, selections });
    sessions[sessionId].completedUsers += 1;
    res.json({ message: 'Selections submitted', totalUsers: sessions[sessionId].totalUsers, completedUsers: sessions[sessionId].completedUsers });
});

app.get('/get-matches/:sessionId', (req, res) => {
    const { sessionId } = req.params;
    if (!sessions[sessionId]) {
        return res.status(404).json({ error: 'Session not found' });
    }
    if (sessions[sessionId].completedUsers < sessions[sessionId].totalUsers) {
        return res.status(400).json({ error: 'Not all users have submitted their selections' });
    }
    const allSelections = sessions[sessionId].selections.map(sel => sel.selections);
    const matches = allSelections.reduce((acc, cur) => acc.filter(item => cur.includes(item)), allSelections[0] || []);
    res.json({ matches });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
