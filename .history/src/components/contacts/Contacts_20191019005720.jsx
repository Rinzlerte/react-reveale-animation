import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import image1 from '../../Resources/images/logos/uploads.png';
import image2 from '../../Resources/images/logos/walking.png';
import image3 from '../../Resources/images/logos/uploads.png';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
  }));

  const tileData = [
    {
        img: {image1},
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: {image2},
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: {image3},
        title: 'Image',
        author: 'author',
        cols: 2,
    }

    ];

const Contacts = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {tileData.map(tile => (
                <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default Contacts;