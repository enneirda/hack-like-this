"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import React, { Suspense } from "react";

class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="px-4 py-3 border border-red-700 bg-red-200 rounded p-1 text-sm flex items-center text-red-900 mb-8">
          <div className="w-full callout">{this.props.fallback}</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function LiveCode() {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary
        fallback={"Oops, there was an error loading the CodeSandbox."}
      >
        <Sandpack
        options={{
            editorWidthPercentage: 20,
            editorHeight: 500,
        }}
        customSetup={{
            dependencies: {
                "react-bootstrap": "^2.10.0",
                "react-google-slides": "^4.0.0",
                "bootstrap": "^5.3.2"

            }
        }}
          files={{
            "index.tsx": `import React from 'react';
            import ReactDOM from 'react-dom/client';
            import 'bootstrap/dist/css/bootstrap.min.css';
            import App from './App';
            
            const root = ReactDOM.createRoot(
              document.getElementById('root') as HTMLElement
            );
            root.render(
              <React.StrictMode>
                <App />
              </React.StrictMode>
            );
            `,
            "styles.css": `.App {
            text-align: center;
          }
          `,

            "App.tsx": `import "./styles.css";
      import Container from "react-bootstrap/Container";
      import Row from "react-bootstrap/Row";
      import Col from "react-bootstrap/Col";
      import Card from "react-bootstrap/Card";
      import Modal from "react-bootstrap/Modal";
      import Button from "react-bootstrap/Button";
      import { useEffect, useState } from "react";
      import ReactGoogleSlides from "react-google-slides";
      
      function App() {
        const [show, setShow] = useState(false);
        const [position, setPosition] = useState(1);
        const [counter, setCounter] = useState(0);
      
        useEffect(() => {
          if (counter === 0) {
            return;
          }
          const timer = setTimeout(() => setCounter(counter - 1), 1000);
          return () => clearInterval(timer);
        }, [counter]);
      
        const handleClose = () => setShow(false);
        const handleShow = (index: number) => {
          setCounter(60);
          setPosition(index + 5);
          setShow(true);
        };
      
        return (
          <Container style={{ marginTop: "24px", width: "1792px", overflowX: "scroll"}}>
            <Row>
              {[...Array(10)].map((quesNumber, index) => {
                console.log(quesNumber);
                return (
                  <Col key={quesNumber} >
                    <ClickCard questionNumber={index + 1} handleShow={handleShow} />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {[...Array(10)].map((quesNumber, index) => {
                return (
                  <Col key={quesNumber} >
                    <ClickCard questionNumber={index + 11} handleShow={handleShow} />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {[...Array(10)].map((quesNumber, index) => {
                return (
                  <Col key={quesNumber} >
                    <ClickCard questionNumber={index + 21} handleShow={handleShow} />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {[...Array(10)].map((quesNumber, index) => {
                return (
                  <Col key={quesNumber} >
                    <ClickCard questionNumber={index + 31} handleShow={handleShow} />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {[...Array(10)].map((quesNumber, index) => {
                return (
                  <Col key={quesNumber} >
                    <ClickCard questionNumber={index + 41} handleShow={handleShow} />
                  </Col>
                );
              })}
            </Row>
            <Row>
              {[...Array(10)].map((quesNumber, index) => {
                return (
                  <Col key={quesNumber} >
                    <ClickCard questionNumber={index + 51} handleShow={handleShow} />
                  </Col>
                );
              })}
            </Row>
            <SlidesModal
              show={show}
              position={position}
              handleClose={handleClose}
              counter={counter}
            />
          </Container>
        );
      }
      
      const ClickCard = ({
        questionNumber,
        handleShow,
      }: {
        questionNumber: number;
        handleShow: (index: number) => void;
      }) => {
        const [isHovered, setIsHovered] = useState(false);
        const [isDisabled, setIsDisabled] = useState(false);
      
        return (
          <Card
            bg={isDisabled ? "secondary" : isHovered ? "primary" : "light"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              handleShow(questionNumber);
              setIsDisabled(true);
            }}
            style={{
              cursor: isDisabled ? "auto" : "pointer",
              height: "8rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card.Text>{questionNumber}</Card.Text>
          </Card>
        );
      };
      
      const SlidesModal = ({
        show,
        position,
        handleClose,
        counter,
      }: {
        show: boolean;
        position: number;
        handleClose: () => void;
        counter: number;
      }) => {
        return (
          <>
            <Modal show={show} onHide={handleClose} fullscreen={true}>
              <Modal.Header closeButton>
                <Modal.Title>Question {counter}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ReactGoogleSlides
                  width={"100%"}
                  height={"100%"}
                  slidesLink="https://docs.google.com/presentation/d/1CkwR-7PF1wZxxoOl-A-sfigo-NFurl7y2zty-CBNbdc/edit?usp=sharing"
                  position={position}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      };
      export default App;
      `,
          }}
          theme="auto"
          template="vite-react-ts"
        />
      </ErrorBoundary>
    </Suspense>
  );
}
