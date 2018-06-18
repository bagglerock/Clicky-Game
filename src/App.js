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
    count: 0
  };

  removeFriend = id => {
    if (this.state.chosenFriends.indexOf(id) === -1){
      this.state.chosenFriends.push(id);
      console.log("initial count: " + this.state.count);
      this.setState({
        count: this.state.count + 1
      });
      
    }
    
    
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
    console.log("after the condition: " + this.state.count);
  };

  render() {
    return (
      <div>
      <Count count={this.state.count}></Count>
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
