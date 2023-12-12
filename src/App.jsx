import Profile from "./Components/Profile";
import avatarProfile from "./assets/avatar.jpg";
export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={avatarProfile}
        name="Pedro Grunwald"
        bio="Full-stack Javascript junior developer at OneBitCode"
        email="Pedro.grunwald@gmail.com"
        phone="+5571993814751"
        githubUrl="https://github.com/PedroGrunwald"
        linkedinUrl="https://www.linkedin.com/in/pedro-henrique-grunwald-2503b5129/"
        InstagramUrl="https://www.instagram.com/pedro.grunwald/"
      />
    </div>
  );
}
