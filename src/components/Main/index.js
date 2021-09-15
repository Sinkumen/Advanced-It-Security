import "./Home.css";

import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";

import { Dashboard } from "../Dashboard";

import { Layout, Button, Typography, Avatar } from "antd";
import { HomeNav } from "./HomeNav";
import { Feedback } from "../Feedback";
import { ReviewFeedback } from "../Review Feedback";
import { Menu, Dropdown } from "antd";

const { Header } = Layout;
const { Title } = Typography;
export const Main = () => {
  const [usr, setUsr] = useState(true);
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setUsr(false);
        }}
      >
        <p>Logout</p>
      </Menu.Item>
    </Menu>
  );
  return (
    <div class="container">
      <Header
        style={{
          background: "white",
          padding: 0,
          zIndex: 9,
          boxShadow: "0 4px 5px 0 #F4F4F4",
        }}
      >
        <div
          style={{
            height: "100%",
          }}
        >
          <Link to="/">
            <Title
              style={{
                float: "left",
                fontWeight: "800",
                marginLeft: 20,
                fontSize: "3em",
                color: "#2C8CF4",
                textAlign: "left",
              }}
            >
              LOGO
            </Title>
          </Link>
          {usr ? (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link to="/user">
                <Button
                  type="link"
                  style={{ marginRight: 10, fontWeight: "bold" }}
                >
                  Dashboard
                </Button>
              </Link>
              <Link to="/user/feedback">
                <Button
                  type="link"
                  style={{ marginRight: 10, fontWeight: "bold" }}
                >
                  Feedback
                </Button>
              </Link>
              <Link to="/user/review-feedback">
                <Button
                  type="link"
                  style={{ marginRight: 10, fontWeight: "bold" }}
                >
                  Review Feedback
                </Button>
              </Link>
              <Dropdown overlay={menu}>
                <Avatar style={{ marginRight: 20 }}>U</Avatar>
              </Dropdown>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link to="/login">
                <Button
                  shape="round"
                  type="primary"
                  style={{ marginRight: 10, fontWeight: "bold" }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  shape="round"
                  style={{
                    color: "#2C8CF4",
                    borderColor: "#2C8CF4",
                    marginRight: 20,
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Header>
      <main class={usr ? "container__center" : "container__main"}>
        <Switch>
          <Route
            path="/user/feedback"
            render={(props) =>
              usr ? <Feedback {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            path="/user/review-feedback"
            render={(props) =>
              usr ? <ReviewFeedback {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            path="/user"
            render={(props) =>
              usr ? <Dashboard {...props} /> : <Redirect to="/" />
            }
          />
          <Route
            path="/"
            render={(props) =>
              usr ? <Redirect to="/user" /> : <HomeNav {...props} />
            }
          />
        </Switch>
      </main>
      <footer>...</footer>
    </div>
  );
};
