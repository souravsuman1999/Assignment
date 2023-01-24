import React from 'react';
import './AllMentors.css';
import { Link } from 'react-router-dom';



function AllMentors() {
  const linkStyle = {
    color: 'White'
  };
  return (
    <>
      <div className='topbar'><h3>All Mentors</h3></div>
      <table>
        <tr>
          <th>Name</th>
          <th>Career Advice</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
        <tr>
          <td><img className='roundpic1' src='./Assets/profilepic.jpeg' alt='profilepic' /> <span className='span'>Subhro Bhattacharya</span></td>
          <td>Skill Development</td>
          <td>SubhroBhattacharya@gmail.com</td>
          <td>8964-85236</td>
          <td><button><Link to='/allmentors/mentorprofile' style={linkStyle}> View Profile</Link></button></td>
        </tr>
        <tr>
          <td><img className='roundpic1' src='./Assets/profilepic.jpeg' alt='profilepic' /> <span className='span'>Subhro Bhattacharya</span></td>
          <td>Skill Development</td>
          <td>SubhroBhattacharya@gmail.com</td>
          <td>8964-85236</td>
          <td><button><Link to='/allmentors/mentorprofile' style={linkStyle}> View Profile</Link></button></td>
        </tr>
        <tr>
          <td><img className='roundpic1' src='./Assets/profilepic.jpeg' alt='profilepic' />
            <span className='span'>Subhro Bhattacharya</span>
          </td>

          <td>Skill Development</td>
          <td>SubhroBhattacharya@gmail.com</td>
          <td>8964-85236</td>
          <td><button><Link to='/allmentors/mentorprofile' style={linkStyle}> View Profile</Link></button></td>
        </tr>
        <tr>
          <td><img className='roundpic1' src='./Assets/profilepic.jpeg' alt='profilepic' /> <span className='span'>Subhro Bhattacharya</span></td>
          <td>Skill Development</td>
          <td>SubhroBhattacharya@gmail.com</td>
          <td>8964-85236</td>
          <td><button><Link to='/allmentors/mentorprofile' style={linkStyle}> View Profile</Link></button></td>
        </tr>
        <tr>
          <td><img className='roundpic1' src='./Assets/profilepic.jpeg' alt='profilepic' /> <span className='span'>Subhro Bhattacharya</span></td>
          <td>Skill Development</td>
          <td>SubhroBhattacharya@gmail.com</td>
          <td>8964-85236</td>
          <td><button><Link to='/allmentors/mentorprofile' style={linkStyle}> View Profile</Link></button></td>
        </tr>
        <tr>
          <td><img className='roundpic1' src='./Assets/profilepic.jpeg' alt='profilepic' /> <span className='span'>Subhro Bhattacharya</span></td>

          <td>Skill Development</td>
          <td>SubhroBhattacharya@gmail.com</td>
          <td>8964-85236</td>
          <td><button><Link to='/allmentors/mentorprofile' style={linkStyle}> View Profile</Link></button></td>
        </tr>
        <tr>
          <td><img className='roundpic1' src='./Assets/profilepic.jpeg' alt='profilepic' /> <span className='span'>Subhro Bhattacharya</span></td>
          <td>Skill Development</td>
          <td>SubhroBhattacharya@gmail.com</td>
          <td>8964-85236</td>
          <td><button><Link to='/allmentors/mentorprofile' style={linkStyle}> View Profile</Link></button></td>
        </tr>
        <tr>
          <td><img className='roundpic1' src='./Assets/profilepic.jpeg' alt='profilepic' /> <span className='span'>Subhro Bhattacharya</span></td>
          <td>Skill Development</td>
          <td>SubhroBhattacharya@gmail.com</td>
          <td>8964-85236</td>
          <td><button><Link to='/allmentors/mentorprofile' style={linkStyle}> View Profile</Link></button></td>
        </tr>
      </table>
    </>
  )
}

export default AllMentors