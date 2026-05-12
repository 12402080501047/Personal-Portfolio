const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Project = require('./models/Project');
const Skill = require('./models/Skill');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// Use a local MongoDB database named 'personal_portfolio'
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/personal_portfolio';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Seed Route (Temporary for development)
app.post('/api/seed', async (req, res) => {
  try {
    await Project.deleteMany({});
    await Skill.deleteMany({});

    const sampleProjects = [
      {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution with payment integration.',
        imageUrl: '/project1.webp',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        githubLink: '#',
        liveLink: '#'
      },
      {
        title: 'Rangoli App',
        description: 'A creative application for designing and sharing beautiful Rangoli patterns.',
        imageUrl: '/project2.webp',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/12402080501047/rangoli-app',
        liveLink: '#'
      }
    ];

    const sampleSkills = [
      { name: 'React', category: 'Frontend' },
      { name: 'JavaScript', category: 'Frontend' },
      { name: 'CSS', category: 'Frontend' },
      { name: 'Node.js', category: 'Backend' },
      { name: 'Express.js', category: 'Backend' },
      { name: 'MongoDB', category: 'Database' }
    ];

    await Project.insertMany(sampleProjects);
    await Skill.insertMany(sampleSkills);

    res.json({ message: 'Database seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
