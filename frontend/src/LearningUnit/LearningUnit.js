import React from "react";
import "./LearningUnit.css";

export default class LearningUnit extends React.Component {
  render() {
    return (
      <div className="container learning-unit">
        <div className="row">
          <div className="col">
            <h2>Introduction</h2>
            <p>2 minutes</p>
            <p>
              The cloud has changed the way organizations solve their business
              challenges, and how applications and systems are designed. The
              role of a solution architect is not only to deliver business value
              through the functional requirements of the application, but to
              ensure the solution is designed in ways that are scalable,
              resilient, efficient and secure. Solution architecture is
              concerned with the planning, design, implementation, and ongoing
              improvement of a technology system. The architecture of a system
              must balance and align the business requirements with the
              technical capabilities needed to execute those requirements. It
              includes an evaluation of risk, cost, and capability throughout
              the system and its components.
            </p>
            <h5>Design a great Azure Architecture</h5>
            <p>
              While there is no one-size-fits-all approach to designing an
              architecture, there are some universal concepts that will apply
              regardless of the architecture, technology, or cloud provider.
              While these are not all-inclusive, focusing on these concepts will
              help you build a reliable, secure, and flexible foundation for
              your application.
            </p>
            <button type="button" class="btn btn-info">
              Check Your Anwers
            </button>
          </div>
        </div>
      </div>
    );
  }
}
