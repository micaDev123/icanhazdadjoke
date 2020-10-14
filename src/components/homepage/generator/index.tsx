import React, { useEffect, useState, Suspense } from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import { Input } from 'antd';
import { fetchRandomJokes } from '../../../redux/generator/generator.actions';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


interface GenerateJokesPRops {
    fetchRandomJokes: () => void;    
}

    const GenerateJokes = (props:GenerateJokesPRops) => {
    const {fetchRandomJokes} =props;
    const [fetchJoke, setFetchJoke] = useState([]);
    const [generateJoke, setGenerateJoke] = useState([]);
    const [loading, setLoading] = React.useState(false);
    const [sucess, setSucess] = React.useState(false);
    const [refresh, setRefresh] = React.useState(false);


    const url = 'https://icanhazdadjoke.com/';
    useEffect(() => {
    async function fetchWaivedList() {
    const response = await axios.get(url,
    {
        headers:{'Accept': 'application/json'}});
        console.log(setFetchJoke(Object.values(response.data)));
            setRefresh(true)
            setTimeout(() => {
                setFetchJoke(Object.values(response.data));
                setRefresh(false)
            }, 2000 * Math.random());
    }
    const initialResource = fetchWaivedList();
    }, []);

        const handleChange = (refresh: any) => {
            let fetch = fetchJoke.slice(1,2);
                console.log(fetch)
                if(fetch !== undefined) {
                        setSucess(false)
                        setLoading(true)
                        setTimeout(() => {
                            setGenerateJoke(fetch);
                            setLoading(false)
                            setSucess(true)
                    }, 2000)
            } else {

            return 'Please Reload the Page'
        }
    }
    const defaultSize = 10;
    const useStyles = makeStyles((theme) => ({
        root: {
            margin: theme.spacing(1),
        },
          buttons: {
              marginLeft: 260,
              background: 'linear-gradient(45deg, #DC143C , #DC143C 11%)',
              height: 50,
              width: 190,
              display: 'flex',
          },
          buttonName: {
             display: 'flex',
          },
          loadingIndicator: {
              position: 'absolute',
              marginLeft: -75,
              color: 'white',
              size:  defaultSize
          }
        }
      ));
    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
        <div id="generator">
            <div className="card">
                <div className="container">
                    <div className="generatedJoke">
                        {generateJoke.map((item:any) =>
                    <li key={item}>{item}</li>)}
                </div>
            </div>
        </div> 
        </div>
            <div className="generate-button">
            <Button 
                className={classes.buttons}
                    variant="contained"  
                        onClick={()=> {
                            handleChange(refresh)
                        }} 
                    color="primary"
                >
                {loading && <CircularProgress size={20}
                className={classes.loadingIndicator} 
                disableShrink={loading}/> }
            <h4 className={classes.buttonName}>Generate joke</h4>
        </Button>
        </div>
            </div>
        </>
    )
}
const mapStateToProps = (state: any) => {
    return {
    };
  };

export default connect(
    mapStateToProps,
    {
        fetchRandomJokes,
    },
)(GenerateJokes);
  