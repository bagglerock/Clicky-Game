import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Count from "./components/Count";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    friends,
    chosenFriends: [],
    count: 0,
    longestStreak: 0
  };

  // Fisher-Yates shuffle
  shuffle = array => {
    let m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  removeFriend = id => {
    if (this.state.chosenFriends.indexOf(id) === -1){
      this.state.chosenFriends.push(id);
      this.setState({
        count: this.state.count + 1
      });
    } else  {
      this.state.chosenFriends = [];
      this.setState({
        count: 0,
        longestStreak: this.state.count
      })
    }
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.shuffle(this.state.friends);
    this.setState({ friends });
  };

  render() {
    return (
      <div>
      <Count 
        count={this.state.count}
        streak={this.state.longestStreak}
      />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))
        }
      </Wrapper>
      </div>
    )

  }
}

export default App;
