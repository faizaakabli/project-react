import { useEffect, useState } from "react";
import CurrentWord from '../component/word';
import usedLetter from '../component/word';


let GOOD_LETTER = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBNéàè";


function CallApi() {

  const [word, setword] = useState(undefined);
  useEffect(() => {
    (async () => {
      const { data } = await getword();
      setword(data);
    })();
    return () => { };
  }, []);


  // const [score, setScore] = useState(undefined);
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await getScore();
  //     setScore(data);
  //   })();
  //   return () => { };
  // }, []);

  // const [user, setuser] = useState(undefined);
  // useEffect(() => {
  //   (async () => {
  //     const {data} = await getuser();
  //     setuser(data);
  //   })();
  //   return () => {};
  // }, []);

  const handleKeyDown = (event) => {
    if (GOOD_LETTER.includes(event.key)) {
      console.log('A key was pressed', event.key);
    }

  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const getword = async () => {
    const dataJson = await fetch("https://animalfinderapi.herokuapp.com/word");
    return await dataJson.json();
  };

  // const getScore = async () => {
  //   const dataJson = await fetch("https://animalfinderapi.herokuapp.com/score");
  //   return await dataJson.json();
  // };
  // const getuser = async () => {
  //   const dataJson = await fetch("https://animalfinderapi.herokuapp.com/user");
  //   return await dataJson.json();
  // };


  if (!word) {
    return <p>waiting</p>;
  }


  return (
    <div>
      <p>{word.word.charAt(0)}</p>
      {/* <p>{score.data.map(user => <div><p>{user.username}</p> <p>{user.score}</p></div>)}</p>
      <p>{user.data[0].username}</p>
      <p>{user.data[0].score}</p> */}
      {/* <CurrentWord CurrentWord={word.word.charAt(0)} usedLetter={usedLetter}></CurrentWord> */}
    </div>
  )

}

export default CallApi;
