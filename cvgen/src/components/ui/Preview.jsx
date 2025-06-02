import { useOutletContext } from "react-router-dom";

const Preview = () => {
  const { profileData } = useOutletContext()

  return (
    <div className="h-screen items-center justify-center">
      <h1> This is preview</h1>
      <br />
      <p>Here we'll write everything about</p>
      <br />
      <p>your cv information</p>
      {profileData.name}
      {profileData.email}
    </div>
  );
};
export default Preview;
