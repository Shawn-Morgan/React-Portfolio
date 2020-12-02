import React from 'react';

import Card from '../components/Card';

import space from '../assets/images/space.jfif';
import quiz from '../assets/images/quiz2.jfif';
import critter from '../assets/images/CritterSitterLogo-V.png';
import weather from '../assets/images/weather.jfif';
import tracker from '../assets/images/fitness.jpg';
import notetaker from '../assets/images/notetaker.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Space Enthusiast',
                    subTitle: 'Space, the final frontier',
                    imgSrc: space,
                    link: 'https://shawn-morgan.github.io/Space-Enthusiast/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Fitness Tracker',
                    subTitle: 'Track your fitness',
                    imgSrc: tracker,
                    link: 'https://powerful-ravine-74873.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Critter Sitter',
                    subTitle: 'A place to connect with dog sitters and dog owners',
                    imgSrc: critter,
                    link: 'https://afternoon-brushlands-34156.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Notetaker',
                    subTitle: 'An app to take notes',
                    imgSrc: notetaker,
                    link: 'https://guarded-ravine-93517.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Weather',
                    subTitle: 'Check the weather',
                    imgSrc: weather,
                    link: 'https://shawn-morgan.github.io/Weather-Dashboard/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Quiz',
                    subTitle: 'Fun coding quiz',
                    imgSrc: quiz,
                    link: 'https://shawn-morgan.github.io/Code-Quiz/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;