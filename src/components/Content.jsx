import { useState } from 'react';
import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipes';

const Content = () => {
    const recipes = data;
    const [filter, setFilter] = useState('');

    return (
        <div className='flex-fill container p-20'>
            <h1 className='my-30'>Découvrez nos nouvelles recettes</h1>
            <div className={`card p-20 ${styles.contentCard}`}>
                <div className={`d-flex mb-20 pl-15 ${styles.searchBar}`}>
                    <label for='searchBar'><i className='fa-solid fa-magnifying-glass mr-15'></i></label>
                    <input
                        onInput={(e) => setFilter(e.target.value.trim().toLowerCase())}
                        type='text' id='searchBar' placeholder='Rechercher une recette' />
                </div>
                <div className={styles.grid}>
                    {recipes.filter((recipe) => recipe.title.toLowerCase().startsWith(filter)).map((recipe) => (
                        <Recipe key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Content;