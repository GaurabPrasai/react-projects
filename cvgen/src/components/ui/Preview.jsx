import { useContext } from "react";
import cvContext from "../../context/cvcontext";

const Preview = () => {
  const { profileData } = useContext(cvContext);
  const { eduData } = useContext(cvContext);

  return (
    <div className="h-screen items-center justify-center">
      <h1> This is preview</h1>
      <br />
      <p>Here we'll write everything about</p>
      <br />
      <p>your cv information</p>
      {profileData.name}
      {profileData.profession}
      {profileData.email}
      {profileData.phone}
      {profileData.address}
      {profileData.summary}
      <hr />
      {eduData.university}
      {eduData.month}
      {eduData.degree}
      {eduData.enddate}
      {eduData.location}

    </div>
  );
};
export default Preview;
