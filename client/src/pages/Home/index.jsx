import React , {useState} from "react";
import styles from "./styles.module.css";


function Home(userDetails) {

	const [rows, setRows] = useState(5); 

	const handleInputChange = (event) => {
	  const inputValue = parseInt(event.target.value, 10);
	  setRows(isNaN(inputValue) ? '' : inputValue);
	}; 
	const createKitePattern = () => {
	
		const formulaq = "FORMULAQ";
		let charIndex = 0;
	
		const pattern = [];
	
		
		for (let i = 1; i <= rows; i += 2) {
		  let spaces = (rows - i) / 2;
		  let line = " ".repeat(spaces);
	
		  for (let j = 0; j < i; j++) {
			line += formulaq[charIndex % formulaq.length];
			charIndex++;
		  }
	
		  pattern.push(line);
		}
	
		
		charIndex = 0;
		for (let i = rows - 2; i >= 1; i -= 2) {
		  let spaces = (rows - i) / 2;
		  let line = " ".repeat(spaces);
	
		  for (let j = 0; j < i; j++) {
			line += formulaq[charIndex % formulaq.length];
			charIndex++;
		  }
	
		  pattern.push(line);
		}
	
		return pattern.map((line, index) => <div key={index}>{line}</div>);
	  };
	const user = userDetails.user;
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
	return (
		<div className={styles.container}>
		
			<h1 className={styles.heading}>Home</h1>
			<div className={styles.form_container}>
				<div className={styles.right}>
				{createKitePattern()}
				</div>
				<div className={styles.left}>
					<h2 className={styles.form_heading}></h2>
					<img 
						src={user.picture}

						alt="profile"
						className={styles.profile_img}
					/>
					<div>Hello {user.name} &nbsp;

					<button  onClick={logout}>
						SignOut
					</button>
					
					</div>
					<div className={styles.userEmail}>You are signed in with {user.email}</div>
					
						<div>
      <label className={styles.userInput}>
        Enter the number of rows:
        <input type="Number" value={rows} onChange={handleInputChange} />
      </label>

      
    </div>
					
				</div>
			</div>
			<div>
       
      </div>
		</div>
	);
}

export default Home;
