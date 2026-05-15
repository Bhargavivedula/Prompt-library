<script>
const data = [

// STUDENT
{category:"Student", title:"Basic Explanation", desc:"Good for first-time understanding.", text:"Explain this topic in very simple English as if I am a beginner."},
{category:"Student", title:"Step-by-Step Learning", desc:"Structured learning.", text:"Teach me this topic step by step from basic to advanced."},
{category:"Student", title:"Real-Life Example", desc:"Easy understanding.", text:"Explain this topic with real-life examples I can easily relate to."},
{category:"Student", title:"Comparison", desc:"Compare topics easily.", text:"Compare this topic with a similar topic and explain the difference clearly."},
{category:"Student", title:"Q&A Practice", desc:"Memory improvement.", text:"Ask me important questions about this topic and then check my answers."},
{category:"Student", title:"Mind Map Summary", desc:"Quick revision.", text:"Give me a short summary and key points of this topic."},
{category:"Student", title:"Story Method", desc:"Easy remembering.", text:"Explain this topic using a simple story so I can remember it easily."},
{category:"Student", title:"Example Problems", desc:"Practice solving.", text:"Give me practice problems on this topic with solutions explained clearly."},
{category:"Student", title:"Teach Like Teacher", desc:"Friendly explanation.", text:"Explain this topic like a friendly teacher teaching in a classroom."},
{category:"Student", title:"Doubt Clearing", desc:"Clear confusion.", text:"Explain this topic again in a different way because I still feel confused."},

// EMPLOYEE
{category:"Employee", title:"Priority Setting", desc:"Task organization.", text:"Help me organize my tasks by priority so I can finish the most important work first."},
{category:"Employee", title:"Time Planning", desc:"Daily schedule.", text:"Create a simple daily schedule for me to complete these tasks efficiently."},
{category:"Employee", title:"Productivity Improve", desc:"Work faster.", text:"Suggest ways I can complete this task faster without reducing quality."},
{category:"Employee", title:"Focus Boost", desc:"Improve focus.", text:"Give me practical tips to stay focused and avoid distractions during work hours."},
{category:"Employee", title:"Step Execution", desc:"Task breakdown.", text:"Break this task into smaller steps so I can complete it quickly and systematically."},

// BUSINESS
{category:"Business", title:"Market Gap Discovery", desc:"Find market gaps.", text:"Analyze the current market. Identify unmet customer needs and suggest business ideas."},
{category:"Business", title:"Data Opportunity", desc:"Data driven ideas.", text:"Suggest scalable business ideas based on consumer behavior and trends."},
{category:"Business", title:"Problem to Product", desc:"Solve problems.", text:"List customer frustrations and suggest product or service solutions."},

// DAILY
{category:"Daily Life", title:"Daily Planning", desc:"Plan your day.", text:"Help me create a clear and realistic plan for today based on my goals and time."},
{category:"Daily Life", title:"Decision Making", desc:"Make smart decisions.", text:"Help me evaluate this decision by listing pros, cons, and risks."},

// PROFESSIONAL
{category:"Professional", title:"Career Growth", desc:"Career roadmap.", text:"Suggest a 1–3 year career growth roadmap based on my current role."},
{category:"Professional", title:"Skill Upgrade", desc:"Future skills.", text:"Identify the most valuable skills in my profession for the next 5 years."}

];

const grid = document.getElementById('promptGrid');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.getElementById('categoryButtons');

const categories = ["All", ...new Set(data.map(d=>d.category))];
let activeCategory = "All";

function createCategoryButtons(){
 categories.forEach(cat=>{
   const btn = document.createElement('div');
   btn.className = 'category-btn';
   btn.innerText = cat;
   if(cat === "All") btn.classList.add('active');
   btn.onclick = ()=>{
     document.querySelectorAll('.category-btn').forEach(b=>b.classList.remove('active'));
     btn.classList.add('active');
     activeCategory = cat;
     render();
   };
   categoryButtons.appendChild(btn);
 });
}

function render(){
 const keyword = searchInput.value.toLowerCase();
 grid.innerHTML='';

 const filtered = data.filter(item=>{
   return (activeCategory === "All" || item.category === activeCategory) &&
   (item.title.toLowerCase().includes(keyword) || item.text.toLowerCase().includes(keyword));
 });

 filtered.forEach(item=>{
   const card = document.createElement('div');
   card.className='card';
   card.innerHTML=`
     <h3>${item.title}</h3>
     <p>${item.desc}</p>
     <div class="prompt-text">${item.text}</div>
   `;
   grid.appendChild(card);
 });
}

searchInput.addEventListener('input', render);

createCategoryButtons();
render();
</script> 
