import { useState, useEffect } from "react";
import { Spinner, Col } from "reactstrap";
import Axios from "axios";
import CardResume from "./CardResume";

const Resume = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/v1/projet")
      .then((res) => {
        setResumes(res.data);

        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Col className="text-center">
          <Spinner className="spinner" size="xl" />
        </Col>
      ) : (
        resumes.map((item) => {
          return (
            <CardResume
              name={item.name}
              description={item.description}
              key={item.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Resume;

//   useEffect(() => {
//     const fetchAllProjects = async () => {
//       try {
//         const { data } = await Axios.get("http://localhost:5000/api/v1/projet");
//         console.log(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllProjects();
//   }, []);
