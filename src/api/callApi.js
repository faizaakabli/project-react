import { useEffect, useState } from "react";


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
    </div>
  )

}

export default CallApi;
