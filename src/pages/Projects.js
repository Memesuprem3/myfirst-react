import GitHubDemo from "../components/GitHubDemo";
import NavBar from '../components/NavBar';
import EasterEgg from '../components/easterEgg';
export default function Projects(){
    return(
        <div>
        
       

            <EasterEgg/>
            <NavBar/>
            <header>
        <h1>Christian Rapp</h1>
        
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/christian-rapp-aab456294/" target="_blank" rel="noopener noreferrer">
            <img src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473" alt="LinkedIn" /></a>
            <a href="https://github.com/Memesuprem3" target="_blank" rel="noopener noreferrer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX///8XFRUAAAATEREKBgYRDg7t7e2BgIA3NjbZ2dlTUlLq6urCwsKJiIjGxsb39/ebm5uPj492dXVwcHC5ubnMzMyqqqo+PT1OTU0lJCRYWFiysrIwLy/j4+NIR0d7e3tkY2MdGxs/J1iEAAAB9klEQVRIie2W23aDIBBFdUCNmqjUaDRGY/7/JztcvOFg0qeurtXzZIFNYWY4E8/71x9QXtWFEEVd5T+hevGAWQ/Rf4hVDUDgzwoAhuoDLEyA+5Y4NOE7rttjGu2OuSdQmBR8HXGjk0NydHPlAYdk6eIK0EEEtiUY6DBDQXO94k5eLAC/GJdJ5LgHgIi9QZExCbbLrgUySfmMygQ/xHKaF8XV6oJwVX+k6TQc6q+znq0JUN8MzvQ9KtC33c9cdURdiXZPD/ww5qYy+GBP5CaF4HgK6TRvP7PpKILmTFjn4C26AL3hIrPgYg3f1RWDm5PzErWC363hF3v3BCKdELsGHAdZSZglNPh0g5cjkI9usKRBn5E3WOmkDIz51nDC36TDVAhPrPHIHIQqf6XOLIjoccZdoL7LvsrDqRYdmZzsD3YGq+4eEGdRMrmQzmJLGkCA5u/Dbecs8W2yPyoG4PNSbR1gn8nm19Vnol1aCeEA8t3AoA+FFjnX8rjuQLRBoulIsoVNDKYX7rIcT/sRvtN8QEtsl+HH6h862h0WgYpaWqWr0fvcvuiASzVAeMcMQuPiPA/DDols+/0ehAN3wFrHpMiesdrcgGBXtyWhgr92FgUGbvubFLeYFgtk0NJ9aquObY6KZcje/ACYlZWr1nMusw+xf/2evgEGFBJqrqKT4AAAAABJRU5ErkJggg==" alt="GitHub" /></a>
        </div>
        <a href="#main-content" className="skip-link">Hoppa till huvudinnehållet</a>
        <section className="main-content" id="main-content">
      </section>
      </header>
            <GitHubDemo/>
            <footer>
        <p>© 2024 Christian Rapp</p>
      </footer>
        </div>

    );
}
