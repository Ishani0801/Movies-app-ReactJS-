import React from "react";
import Header from "./../../common/header/Header"
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import moviesData from "../../common/movieData.js";
import "./Home.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from "react-router-dom";
import { Route } from "react-router";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Switch } from "react-router-dom";

export default class Home extends React.Component {

    render() {

        return <div>
            <Header />
            <div style={{
                backgroundColor: '#ff9999',
                padding: '8px',
                textAlign: 'center',
                fontSize: '1rem'
            }}>Upcoming Movies</div>
            <div >
                <ImageList cols={6} style={{ display: "flex", flexWrap: "nowrap" }}>
                    {moviesData.map((item) => (
                        <ImageListItem key={item.id}>
                            <img src={item.poster_url} alt={item.title} />
                            <ImageListItemBar
                                title={item.title}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <div className='flex-container'>
                <div className='left'>

                    <div >
                        <Link to="./details">
                            <ImageList rowHeight={180}>
                                <ImageListItem key="Subheader" cols={4} rows={2} style={{ height: 'auto' }}>
                                </ImageListItem>

                                {moviesData.map((item) => (
                                    <ImageListItem style={{ height: "350px", width: "250px", padding: "10px" }} key={item.id}>
                                        <img src={item.poster_url} alt={item.title} />
                                        <ImageListItemBar
                                            title={item.title}
                                            // release_date = new Date().toISOString();
                                            subtitle={<span>Release Date: {new Date(item.release_date).toDateString()}</span>}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Link>
                        <Switch>
                            <Route path="./details" Component={Home} />
                        </Switch>
                    </div>
                </div>
                <div className='right'>
                    <Card className="card">
                        <CardContent>
                            <Typography style={{ color: "#3F51B5" }}>
                                FIND MOVIES BY:
                            </Typography>
                            <form >
                                <TextField id="standard-basic" label="Movie Name" />
                            </form>

                            <FormControl style={{ width: "100%" }}>
                                <InputLabel >Genre</InputLabel>
                                <Select>
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}></MenuItem>
                                    <MenuItem value={20}></MenuItem>
                                    <MenuItem value={30}></MenuItem>
                                </Select>
                            </FormControl>
                            <br></br>
                            <FormControl style={{ width: "100%" }}>
                                <InputLabel>Artists</InputLabel>
                                <Select

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}></MenuItem>
                                    <MenuItem value={20}></MenuItem>
                                    <MenuItem value={30}></MenuItem>
                                </Select>

                            </FormControl>
                            <br></br><br></br>
                            <form >
                                <TextField style={{ width: "100%" }}
                                    id="date"
                                    label="Release Date Start"
                                    type="date"
                                    defaultValue="dd-mm-yyyy"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                            <br></br>
                            <form >
                                <TextField style={{ width: "100%" }}
                                    id="date"
                                    label="Release Date End"
                                    type="date"
                                    defaultValue="dd-mm-yyyy"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </form>
                        </CardContent>
                        <br></br>
                        <Button variant="contained" color="primary" style={{ width: "70%" }}>
                            APPLY
                        </Button>

                    </Card>
                </div>
            </div>
        </div>;
    }
}

