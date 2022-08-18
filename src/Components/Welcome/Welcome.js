// Librairies
import React, {useState, useEffect, Fragment} from "react";
import './Welcome.scss';
import { Link,useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { auth, user } from '../Firebase/Firebase';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Logout from "../Logout/Logout";
import Quiz from "../Quiz/Quiz";
import Loader from "../Loader/Loader";

const Welcome = () => {
    const navigate = useNavigate();

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const listener = onAuthStateChanged(auth, user => {
            user ? setUserSession(user) : navigate('/')

        })


        if (!!userSession) {

            const colRef = user(userSession.uid);

            getDoc(colRef)
            .then( snapshot => {
                if (snapshot.exists()) {
                    const docData = snapshot.data(); // objet
                    // console.log(docData);
                    // console.log(snapshot.id);
                    setUserData(docData);
                }
            })
            .catch( error => {
                console.log(error);
            })
        }

        return listener();
    }, [userSession])

    useEffect(() => {
        userSession && toast.info(`Bienvenue ${userData.pseudo}, et bonne chance`, {
            icon: false,
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
    }, [userData])
    
    return (
        <div className={`welcome ${userSession === null && "center"}`}>
            {
                userSession === null ? (
                    <Fragment>
                        <Loader 
                        loaderMsg={"Authentification"}
                        />
                    </Fragment>
                )
                :
                (
                    <Fragment>
                        <Logout/>
                        <Quiz userData={userData}/>
                    </Fragment>
                )
            }
        </div>
    )
    
}

export default Welcome;