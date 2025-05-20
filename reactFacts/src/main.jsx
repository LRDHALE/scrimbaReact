import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <div>
      <main>
        <header>
          <img src="reactFacts/src/react-logo.png" alt="" width="40px" />
        </header>
        <h1>Reason I am excited to learn React</h1>
        <ol>
          <li>It is a JavaScript library for building user interfaces</li>
          <li>It allows us to create reusable UI components</li>
          <li>It is maintained by Facebook</li>
          <li>It is used by many companies and developers</li>
          <li>It has a large community and ecosystem</li>
        </ol>
      </main>
      <footer>
        <small>&#169; 2025 LRDhale development. All rights reserved</small>
      </footer>
    </div>
    
    
  );
}


root.render(<Page />);
