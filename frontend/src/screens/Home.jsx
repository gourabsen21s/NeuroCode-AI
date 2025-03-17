import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/user.context';
import axios from "../config/axios";
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import BackgroundPattern from '../components/BackgroundPattern';

const Home = () => {
    const { user } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/projects/all')
            .then((res) => setProjects(res.data.projects))
            .catch(err => console.log(err));
    }, []);

    function createProject(e) {
        e.preventDefault();
        axios.post('/projects/create', { name: projectName })
            .then((res) => {
                setProjects([...projects, res.data.project]);
                setIsModalOpen(false);
                setProjectName('');
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col relative">
            <BackgroundPattern />
            <Navbar />
            
            <div className="flex-1 relative z-10 p-6 container mx-auto">
                {/* Projects Section */}
                <h2 className='text-2xl font-bold mb-6 text-white mt-16'>Your Projects</h2>
                <div className='flex flex-wrap gap-4'>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='p-6 border-2 border-dashed rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-64 h-40'
                        style={{
                            borderColor: 'rgba(16, 185, 129, 0.5)',
                            backgroundColor: 'rgba(10, 20, 25, 0.7)',
                            backdropFilter: 'blur(8px)'
                        }}
                    >
                        <FaPlusCircle className='text-2xl text-teal-400' />
                        <span className='text-lg font-semibold text-white'>New Project</span>
                    </button>
                    
                    {projects.map((project) => (
                        <div
                            key={project._id}
                            onClick={() => navigate(`/project`, { state: { project } })}
                            className='cursor-pointer p-6 rounded-lg transition-all duration-300 w-64 h-40 flex flex-col justify-between hover:shadow-lg'
                            style={{
                                backgroundColor: 'rgba(10, 20, 25, 0.8)',
                                backdropFilter: 'saturate(180%) blur(20px)',
                                border: '1px solid rgba(16, 185, 129, 0.1)'
                            }}
                        >
                            <h2 className='font-semibold text-lg text-white'>{project.name}</h2>
                            <p className='text-gray-400'><small>Collaborators: {project.users.length}</small></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50'>
                    <div className='p-6 rounded-lg shadow-2xl w-11/12 md:w-1/3'
                        style={{
                            backgroundColor: 'rgba(10, 20, 25, 0.9)',
                            backdropFilter: 'saturate(200%) blur(25px)',
                            border: '1px solid rgba(16, 185, 129, 0.1)'
                        }}
                    >
                        <h2 className='text-xl font-semibold mb-4 text-white'>Create New Project</h2>
                        <form onSubmit={createProject}>
                            <div className='mb-4'>
                                <label className='block text-sm font-medium text-gray-300 mb-1'>Project Name</label>
                                <input
                                    onChange={(e) => setProjectName(e.target.value)}
                                    value={projectName}
                                    type='text'
                                    className='mt-1 block w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all'
                                    placeholder='Enter project name'
                                    required
                                />
                            </div>
                            <div className='flex justify-end gap-2'>
                                <button
                                    type='button'
                                    className='px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300'
                                    onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='px-4 py-2 text-black font-medium rounded-lg transition-all duration-300 bg-teal-400 hover:bg-teal-500'>
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home; 
