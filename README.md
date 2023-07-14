# Project 3: The State of American Universities in 2013

### Group Members: Juhi, Kesha, Lora, and Hima

### Description:
In this project, our group focused on describing the state of American universities and their student profiles in 2013. We used a Kaggle dataset to develop a map using Leaflet and a dashboard using JavaScript/HTML. Our map displays the US map with pins locating different universities. When you select each pin, the university name, graduation rate, and total enrollment will populate. Additionally, we developed a dashboard. Our dashboard includes a dropdown menu to select for a specific university, which results in a metadata panel being displayed with graduation rates for attaining a Bachelor's degree in 4 years, 5 years, and 6 years. A bar chart with the 25th and 75th percentile SAT scores in critical reading, math, and writing and a line graph with tuition and fees from 2010-2014 will also be displayed on our dashboard depending on the university selected in the dropdown menu. Lastly, we also feature two scatter plots showing the relationship between SAT scores and graduation rates.

### Team Member Responsiblities: 
1. Maintain README: Juhi, Lora
2. Convert Excel data into geojson: Lora, Hima, Kesha
3. Create US Map: Kesha
4. Create title and green markers locating each university: Kesha
5. Develop code so that each marker selected results in university name, graduation rate, and total enrollment being displayed: Lora
6. Adjust marker color to match graduation rate (red for low graduation rate, green for high graduation rate): Lora
7. Create a dashboard with a dropdown menu of university names and a metadata panel with graduation rate(s), a bar chart with SAT scores, a line graph with tuition and fees and scatterplots showing SAT scores and graduation rate: Juhi, Hima
8. Create Mongo database: Everyone
9. Develop Flask app: Everyone
10. Develop presentation and present: Everyone
    
### Files:
Dashboard Files: index.html, static/logic_dashboard.js, IPEDS_data_dashboard.geojson
<br> Map Files: map.html, static/logic.js, static/style.css, resource/schools.geojson
<br> Flask app: flask_app.py

### Conclusion:
Based on a 2013 dataset, universities that have higher SAT critical reading and math scores (75th percentile) are associated with having higher rates of graduation for a Bachelor’s degree in 4 years. High admitted SAT scores serve as a reliable indicator for undergraduate graduation rates.

### Links:
[Presentation](https://docs.google.com/presentation/d/16MGWfZJCotK0P8OZmjzaX3lvFx-8145NvsQd3Tv3eiM/edit?usp=sharing) 
<br> [Dataset](https://www.kaggle.com/code/devisangeetha/find-your-university-in-us-with-leaflet-viz/input) 
<br> [Map](https://loralou.github.io/MapLeafletGroup3/)
<br> [Dashboard](https://loralou.github.io/Project3/)
