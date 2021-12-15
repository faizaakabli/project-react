export default function CurrentWord({CurrentWord, usedLetter}){
    return(
        <div>
            {CurrentWord.split('').map(
                letter => {
                    let status = 'finded'
                    if(!usedLetter.includes(letter)){
                        status = "not finded"
                    }
                    return <span key={letter} className={status} > {status === 'finded' ? letter: "__" }</span>
                }
            )}
        </div>
    )
}