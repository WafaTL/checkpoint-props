import Profile from './profile/Profile';
import './App.css';
import Header from './layout/Header';
import img from './profile/img.jpg';


function App() {
  const profile={fullName:'Wafa TLILI',
                  bio:`Web developer with a proven ability to adabt in both
                  self-starting and collaborative envirments while stying focused 
                  on achieving hight-quality results under strict deadlines`,
                profession:'Web developer',
}
const showName = fullName => alert(`fullName: ${fullName}`);

  return (
<>
  <Header fullName={profile.fullName}></Header>
  <br/>
  <div className="profileList">
    <Profile  profile={profile} handleName={showName}
    >
    <img src={img} className="card-img-top" alt='profilePhoto'/>
    </Profile>
  </div>
</>
);
}

export default App;
