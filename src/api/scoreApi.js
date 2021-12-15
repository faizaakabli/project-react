import React, { useEffect, useState } from "react";
import {map} from 'lodash'
import axios from 'axios';
import './score.css'
export default function Score() {

    const [datas, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios ("https://animalfinderapi.herokuapp.com/score");

            setData(res.data);
            console.log(res.data);
        }
        fetchData();
    }, [])

    return (
        <card className="score">
            <React.Fragment>
                {
                    map(datas, (data) =>
                        map(data, (score) =>
                            <p> <img class="img-avatar" src={score.avatar}></img>  User: {score.username}   score: {score.score}</p>
                        ))
                }
            </React.Fragment>
        </card>
    )
}

