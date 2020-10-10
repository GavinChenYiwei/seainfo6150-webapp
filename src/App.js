import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
	  const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      )
	  const rspJson = await response.json();
      setFetchedData(rspJson);
    }
	  
  if (!fetchedData.length) {
      fetchData();
    }
  }, [fetchedData]);

  let displayContent;

  if (fetchedData.length > 0) {
	displayContent = (
		<div className="App">
		  <Switch>
			<Route>
			  {Object.values(fetchedData).map((data) => (<DynamicArticle article={data}/>))}
			</Route>
		  </Switch>
		</div>
	);
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return isEmpty(fetchedData) ? null : (
	<div className="App">
      {displayContent}
    </div>
  );
}

export default App;
