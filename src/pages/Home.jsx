import { useRef } from "react";
import "../assets/styles/home.css";
import { FiHome } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import noPhotoImage from "../assets/images/no-photo.jpg"; // Adjust path based on file structure

function Home() {
  const dialogRef = useRef(null);
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <div className="home">
      <div className="sidebar">
        <div className="top">
          <h1 className="title">Flower Garden</h1>
          <div className="icons">
            <FiHome
              onClick={() => {
                location.reload();
              }}
            />
            <GoPlusCircle onClick={openDialog} />
            <AddPost ref={dialogRef} onClose={closeDialog} />
            <CiSearch />
          </div>
        </div>
        <div className="bottom">
          <h2 className="notifications-title">Notifications</h2>
        </div>
      </div>
      <div className="infinite-scroll">
        <Post
          userImage={noPhotoImage}
          username="johndoe"
          postImage={noPhotoImage}
          postText="Optional caption text here"
        />
        <Post
          userImage={noPhotoImage}
          username="johndoe"
          postImage={noPhotoImage}
          postText="Optional caption text here"
        />
        <Post
          userImage={noPhotoImage}
          username="johndoe"
          postImage={noPhotoImage}
          postText="Optional caption text here"
        />
      </div>
    </div>
  );
}

export default Home;
