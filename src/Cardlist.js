import { useEffect, useState } from "react";
import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";

function Cardlist({ profile }) {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://source.unsplash.com/random" />}
      >
        <Meta
          title={profile ? profile.name : "Loading...   "}
          description={profile ? "Home: " + profile.homeworld : "Loading..."}
        />
      </Card>
      {/* <Button onClick={setMyName}>Set name</Button> */}
    </div>
  );
}

export default Cardlist;
