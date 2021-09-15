import React from "react";
import { Button, List, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;

export const ReviewFeedback = () => {
  const data = [
    {
      name: "Sinkumen Aseffa",
      email: "sinkumen@gmail.com",
      comment:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently",
    },
    {
      name: "Sinkumen Aseffa",
      email: "sinkumen@gmail.com",
      comment:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently",
    },
    {
      name: "Sinkumen Aseffa",
      email: "sinkumen@gmail.com",
      comment:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <List
        style={{ marginTop: 20, width: "50%", textAlign: "left" }}
        size="large"
        header={
          <Title
            style={{
              margin: 0,
              fontWeight: "800",
              fontSize: "3.5em",
              color: "#2C8CF4",
              marginBottom: 20,
              textAlign: "left",
            }}
          >
            Review Your Feedback
          </Title>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.title}>
            <List.Item.Meta
              title={<Link to={"/user/feedback"}>{item.name}</Link>}
              description={item.email}
            />
            {item.comment}
            <br />
            <Link to="/user/feedback">
              <Button
                shape="round"
                type="primary"
                style={{
                  margin: 20,
                  marginLeft: 0,
                  fontWeight: "bold",
                  width: 150,
                }}
              >
                Edit Feedback
              </Button>
            </Link>
            ,
          </List.Item>
        )}
      />
    </div>
  );
};
