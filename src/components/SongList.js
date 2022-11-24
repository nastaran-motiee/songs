import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from '../actions';


class SongList extends Component {
    renderList = () => {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={ song.title }>
                    <div className="right floated content">
                        <div className="ui button" onClick={ () => this.props.selectSong(song) }>Select</div>
                    </div>
                    <div className="content">
                        { song.title }
                    </div>
                </div>
            );


        });
    };

    render() {
        return (
            <div className="ui middle aligned divided list">
                { this.renderList() }
            </div>

        );
    }
}

/**
 * This function will be passed to connect function as the first argument
   to get some data from the redux store.
 * The result will be:  this.props = { songs: state.songs}
                * @param {*} state
                * @returns A list of songs
                */
const mapStateToProps = (state) => {
    return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);