import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";

import apiCall from './apiCall';
import CardNewMonster from './CardNewMonster';
import SelectMonster from './SelectMonster';


class NewMonster extends React.Component {
    constructor() {
        super();
        this.state = {
            listMonsters: [],
            selectIsClosed: true,
            selectedMonster: {}
        };

        this.handleSelectIsClosed = this.handleSelectIsClosed.bind(this)
        this.getMonster = this.getMonster.bind(this)
    }

    componentDidMount() {
        apiCall
            .get('/gogetthat')
            .then(res => {
                const datas = res.data;
                this.setState({ listMonsters: datas });
            })
            .catch(err => console.log(err));
    };

    handleSelectIsClosed() {
        const selectIsClosed = this.state;
        console.log(selectIsClosed)
        this.setState({ selectIsClosed: !this.state.selectIsClosed })
    }

    getMonster(monster) {
        this.setState({ selectedMonster: monster })
    }


    render() {
        const { listMonsters } = this.state
        const { selectIsClosed } = this.state

        if (selectIsClosed) {
            console.log(this.state.selectIsClosed)
            return (
                <div>
                    <Button onClick={this.handleSelectIsClosed}>New Monster</Button>
                </div>
            )
        } else {
            console.log(this.state.selectIsClosed)
            return (
                <div>
                    <Button onClick={this.handleSelectIsClosed}>New Monster</Button>
                    <SelectMonster monsters={this.state.listMonsters} getMonster={this.getMonster} />
                    <CardNewMonster {...this.state.selectedMonster} />
                    <Link to={{
                        pathname: "/create",
                        state: { ...this.state.selectedMonster }
                    }}>
                        <Button tag={Link} >Create New Monster</Button>
                    </Link>
                </div>
            );
        }
    }
}


export default NewMonster;