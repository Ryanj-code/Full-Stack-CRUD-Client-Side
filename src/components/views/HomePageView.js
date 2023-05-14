/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
const imageSize = {
  width: '500px',
  height: '400px'
}

const HomePageView = () => {
  const imageUrl = 'https://media.istockphoto.com/id/1319991057/photo/law-quadrangle-university-of-michigan-ann-arbor-aerial-view.jpg?b=1&s=170667a&w=0&k=20&c=4v-yToqfngkdp_lcgOBId11FGjbnAcTi6HQ3aCOfer4=';
  // Render Home page view
  return (
    <div >
      <h1>Home Page</h1>
      <img src={imageUrl} alt="Home Page" style={imageSize}></img>
    </div>
  );    
}

export default HomePageView;