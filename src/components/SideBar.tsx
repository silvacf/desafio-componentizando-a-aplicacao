import { Button } from "./Button";

interface MovieGenres{
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface sideBarProps{
  moviesGenres: MovieGenres[];
  selectedGenreId:number;
  handleClickButton:any;
}

export function SideBar(props:sideBarProps) {
  return(
     <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.moviesGenres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}