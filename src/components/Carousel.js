import React from 'react';

import Card from '../components/Card';

import space from '../assets/images/space.jfif';
import quiz from '../assets/images/quiz2.jfif';
import critter from '../assets/images/CritterSitterLogo-V.png';
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
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Quiz???',
                    subTitle: 'Basic Quiz',
                    imgSrc: quiz,
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Critter Sitter',
                    subTitle: 'A place to connect with dog sitters and dog owners',
                    imgSrc: critter,
                    link: 'https://github.com/',
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