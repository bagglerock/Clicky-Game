import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    friends,
    chosenFriends: [],
    count: 0
  };

  removeFriend = id => {
    //console.log(id);
    this.state.chosenFriends.push(id);
    //console.log(this.state.chosenFriends);
    if (this.state.chosenFriends.indexOf(id) !== -1){
      this.setState({
        count: this.state.count + 1
      });
    
    }
    console.log(this.state.count);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {
    return (
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
    )

  }
}

export default App;
