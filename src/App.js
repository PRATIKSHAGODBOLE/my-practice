
import './App.css';
// import MovieApp from './MovieApp/MovieApp'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import CakeCounter1 from './components/CakeCounter1';
import { Provider } from 'react-redux';
import store from './components/Store';
import CakeCounter2 from './components/CakeCounter2';
//import CounterContainer1 from './components/CounterContainer1';
// import WithOutContext from './components/WithOutContext';
 import ContexAssigment from './components/ContexAssigment'
// import WithContextAPI from './components/WithContextApi';


// import CrudApp from './SocialPostApp/CrudApp';
// import UseEffect from './UseEffect/UseEffectLife';
// import RevAndProApp from './ReverseAndPromote/RevAndProApp';
// import PropsState from './PropsWithState/PropsState'
// import Hook4 from './Hooks/Hook4';

// import UseEffectLife from './UseEffect/UseEffectLife';

function App() {
  return (
    <div className="container">
   {/* <MovieApp/> */}
   {/* <RevAndProApp /> */}
   {/* <PropsState  title="This is Title of Props Parent Components" Body="This is Body of Props Parent Components"/> */}

   {/* <PropsState  name="Pratiksha" age={23}/>
   <PropsState  name="Nisha" age={24}/>
   <PropsState  name="Rahul" age={25}/> */}
   {/* <PropsState roll={13}  name="Rahul"/> */}
   {/* <Hook4 /> */}

   {/* <UseEffectLife herader="This Is Form" /> */}
   {/* ---------------------------- */}
   {/* <CrudApp/> */}
   
   
   {/* -----------------------------provider is part of react-redux 
   (provider responsible for providing the data from store) */}
   {/* provider work like subscribe */}
    <Provider store={store}>  {/*store ke andar ka data CakeCounter1 ko mil jayega */}
     <CakeCounter1 />
    <hr></hr>
    <CakeCounter2/> 
   {/* <CounterContainer1/> */}
   </Provider>
    


     {/* <WithContextAPI/> */}
     <ContexAssigment /> 
    </div>
  );
}

export default App;
