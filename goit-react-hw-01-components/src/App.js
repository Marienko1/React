import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./components/Profile/user.json";
import statistics from "./components/Statistics/statistical-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics stats={statistics} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;