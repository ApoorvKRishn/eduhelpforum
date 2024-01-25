
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getStorage, ref, uploadBytesResumable} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCHlQvX5-kPLmeboGFW24AehS739j5teic",
    authDomain: "eduhelp-forum-21f27.firebaseapp.com",
    projectId: "eduhelp-forum-21f27",
    storageBucket: "eduhelp-forum-21f27.appspot.com",
    messagingSenderId: "265722204673",
    appId: "1:265722204673:web:d60515c8d10f0c053ce600",
    measurementId: "G-EWHM693CRM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  function Upload_file(){
    const fileInput = document.querySelector("file")
    const file = fileInput.files[0];

    if(file){
        const storageRef = ref(storage,"uploads/" + file.name)
        const uploadTask = uploadBytesResumable(storageRef,file)
        const progressBar = document.querySelector(".progress");

        uploadTask.on("state_change",(snapshot)=>{
            const Progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log("Upload" + Progress + "%");
            progressBar.innerHTML = `${math.trunc(Progress)} %`
        })
    }
    else{
        console.log("no file");
    }
  }

  const upload_btn = document.querySelector("#upload")
  upload_btn.addEventListener("click",Upload_file)