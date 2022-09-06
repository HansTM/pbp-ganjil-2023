"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[537],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=i,c=h["".concat(p,".").concat(u)]||h[u]||d[u]||o;return a?n.createElement(c,r(r({ref:t},m),{},{components:a})):n.createElement(c,r({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_label:"Lab 1"},r="Lab 1: Introduction to Django and Model-View-Template (MVT) Applications in Django",l={unversionedId:"tutorial/tutorial-1",id:"tutorial/tutorial-1",title:"Lab 1: Introduction to Django and Model-View-Template (MVT) Applications in Django",description:"Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Semester 2022/2023",source:"@site/i18n/en/docusaurus-plugin-content-docs-assignments/current/tutorial/tutorial-1.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-1",permalink:"/ganjil-2023/en/assignments/tutorial/tutorial-1",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Lab 1"},sidebar:"tutorialSidebar",previous:{title:"Lab 0",permalink:"/ganjil-2023/en/assignments/tutorial/tutorial-0"},next:{title:"Assignment 1",permalink:"/ganjil-2023/en/assignments/tugas/tugas-1"}},p={},s=[{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"Introduction to Django Applications",id:"introduction-to-django-applications",level:2},{value:"The Concept of Models, Views, and Templates (MVT)",id:"the-concept-of-models-views-and-templates-mvt",level:2},{value:"Tutorial: Startup",id:"tutorial-startup",level:2},{value:"Tutorial: Creating a Django App along with Model Configuration",id:"tutorial-creating-a-django-app-along-with-model-configuration",level:2},{value:"Tutorial: Implement Basic Views",id:"tutorial-implement-basic-views",level:2},{value:"Tutorial: Connecting Models with Views and Templates",id:"tutorial-connecting-models-with-views-and-templates",level:2},{value:"The Final Word",id:"the-final-word",level:2},{value:"HAPPY CODING!",id:"happy-coding",level:3},{value:"Further Reading Resources",id:"further-reading-resources",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Credits",id:"credits",level:2}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-1-introduction-to-django-and-model-view-template-mvt-applications-in-django"},"Lab 1: Introduction to Django and Model-View-Template (MVT) Applications in Django"),(0,i.kt)("p",null,"Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Semester 2022/2023"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,i.kt)("p",null,"After completing this tutorial, students are expected to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Understand the concept of MVT in Django applications"),(0,i.kt)("li",{parentName:"ul"},"Understand the flow of Django displaying an HTML page"),(0,i.kt)("li",{parentName:"ul"},"Understand the routing configuration in ",(0,i.kt)("inlineCode",{parentName:"li"},"urls.py")),(0,i.kt)("li",{parentName:"ul"},"Understand the relationship between ",(0,i.kt)("em",{parentName:"li"},"models"),", ",(0,i.kt)("em",{parentName:"li"},"views")," and ",(0,i.kt)("em",{parentName:"li"},"template")," in Django"),(0,i.kt)("li",{parentName:"ul"},"Understand the basic syntax for ",(0,i.kt)("em",{parentName:"li"},"mapping")," data to HTML templates")),(0,i.kt)("h2",{id:"introduction-to-django-applications"},"Introduction to Django Applications"),(0,i.kt)("p",null,"Django is a ",(0,i.kt)("em",{parentName:"p"},"web framework")," that uses the Python programming language. This ",(0,i.kt)("em",{parentName:"p"},"web framework")," is very useful in web development because it provides the components needed to get a website up and running without having to start from scratch. Before starting web development using Django, it's important to understand what a ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual environment")," (virtualenv) is. In the previous tutorial-0, you created a ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual environment")," to run a simple Django application on your local machine. In short, a ",(0,i.kt)("em",{parentName:"p"},"virtual environment")," serves to separate the settings and ",(0,i.kt)("em",{parentName:"p"},"package")," installed in each Django project so that changes made to one project don't affect the others. In other words, each Django project should have its own ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv"),"."),(0,i.kt)("h2",{id:"the-concept-of-models-views-and-templates-mvt"},"The Concept of Models, Views, and Templates (MVT)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://krify.co/wp-content/uploads/2019/06/Django-Work-flow.jpg",alt:"Visualization of a running Django application"})),(0,i.kt)("p",null,"Django is a ",(0,i.kt)("em",{parentName:"p"},"framework")," that follows the MVT (Model-View-Template) structure. MVT is a derivative of the MVC (Model-View-Controller) structure, but the  ",(0,i.kt)("em",{parentName:"p"},"model")," is more focused on the object that defines the entities in the ",(0,i.kt)("em",{parentName:"p"},"database")," and their configuration, the ",(0,i.kt)("em",{parentName:"p"},"views")," serve as the main logic of the application that will process incoming requests, and the ",(0,i.kt)("em",{parentName:"p"},"template")," serves as the views that will be returned to the user. "),(0,i.kt)("p",null,"The flow of a request being processed in Django is as follows. First, incoming requests to the Django server will be processed through ",(0,i.kt)("inlineCode",{parentName:"p"},"urls")," to be forwarded to the ",(0,i.kt)("inlineCode",{parentName:"p"},"views")," defined by the developer to process the request. If there is a process that requires the involvement of a ",(0,i.kt)("em",{parentName:"p"},"database"),", then the ",(0,i.kt)("inlineCode",{parentName:"p"},"views")," will call a ",(0,i.kt)("em",{parentName:"p"},"query")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"models")," and the ",(0,i.kt)("em",{parentName:"p"},"database")," will return the result of the ",(0,i.kt)("em",{parentName:"p"},"query")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"views"),". After the request has been processed, the result of the process will be mapped into the HTML that has been defined before finally the HTML is returned to the user as a response."),(0,i.kt)("h2",{id:"tutorial-startup"},"Tutorial: Startup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log in to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pbp-fasilkom-ui/django-pbp-template"},"https://github.com/pbp-fasilkom-ui/django-pbp-template")," and select the Use this template action. You'll be redirected to a page to create a new repository with the same template as Django's template repository.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter a repository name to your liking. Make sure your repository is public so it can later be checked out by teaching assistants. The Include all branches section does not need to be checked.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone the new repository to your computer with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone <URL_REPOSITORY>")," with the description <URL_REPOSITORY> adjusted to the repository link you just created.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the repository that you have cloned on your computer and create a virtual environment with the following command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"python -m venv env\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch the virtual environment with the command that corresponds to the type of operating system you are using."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Windows:\nenv\\Scripts\\activate.bat\n\nUnix (Linux & Mac OS):\nsource env/bin/activate\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the dependencies required to run the Django project with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install -r requirements.txt")," command.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the Django project you've created with the ",(0,i.kt)("inlineCode",{parentName:"p"},"python manage.py runserver")," command and open ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8000")," in your favorite browser to test if it runs properly."))),(0,i.kt)("p",null,"Now that you've configured your repository and Django project, you'll learn how to create a django-app."),(0,i.kt)("h2",{id:"tutorial-creating-a-django-app-along-with-model-configuration"},"Tutorial: Creating a Django App along with Model Configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a django-app named wishlist with the python command ",(0,i.kt)("inlineCode",{parentName:"p"},"python manage.py startapp wishlist"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.py")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"project_django")," folder and add the wishlist app to the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALLED_APPS")," variable to register the django-app you've created into your Django project. An example is as follows."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"INSTALLED_APPS = [\n    ...,\n    'wishlist',\n]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"models.py")," file in the wishlist folder and add the following code snippet."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"from django.db import models\n\nclass ItemWishlist(models.Model):\n    item_name = models.CharField(max_length=50)\n    item_price = models.IntegerField()\n    description = models.TextField()\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"python manage.py makemigrations")," command to prepare to migrate the model schema into the local Django database.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"python manage.py migrate")," command to deploy the created model schema into the local Django database.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"fixtures")," inside the wishlist application folder and create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"initial_wishlist_data.json")," containing the following code."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'[\n    {\n        "model": "wishlist.itemwishlist",\n        "pk":1,\n        "fields":{\n            "item_name": "iPhone 14 Pro Maag",\n            "item_price":"14000000",\n            "description: "It gives you ulcers because it\'s expensive."\n        }\n},\n{\n        "model": "wishlist.itemwishlist",\n        "pk":2,\n        "fields":{\n            "item_name": "Round Hat",\n            "item_price":"99000",\n            "description": "Round is my hat, if it\'s not round it\'s not my hat."\n        }\n    },\n    {\n        "model": "wishlist.itemwishlist",\n        "pk":3,\n        "fields":{\n            "item_name": "Folding Mattress",\n            "item_price":"500000",\n            "description": "How many layers? Hundreds!"\n        }\n    }\n]\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"python manage.py loaddata initial_wishlist_data.json")," to load the data into the local Django database."))),(0,i.kt)("h2",{id:"tutorial-implement-basic-views"},"Tutorial: Implement Basic Views"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"views.py")," that is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," folder and create a function that accepts the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," and returns the ",(0,i.kt)("inlineCode",{parentName:"p"},'render(request, "wishlist.html")'),". The example can be seen below."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'def show_wishlist(request):\n    return render(request, "wishlist.html")\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," application folder and create a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist.html")," inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," folder that you've just created. Fill the content of the ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist.html")," with the following ",(0,i.kt)("em",{parentName:"p"},"template"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"{% extends 'base.html' %}\n\n{% block content %}\n<h5>Name: </h5>\n<p>Fill me!</p>\n\n<table>\n    <tr>\n    <th>Item Name</th>\n    <th>Item Price</th>\n    <th>Description</th>\n    </tr>\n    {% comment %} Add the data below this line {% endcomment %}\n</table>\n\n{% endblock content %}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a file inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," application folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"urls.py")," for ",(0,i.kt)("em",{parentName:"p"},"routing")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"views")," function that you've created so that your HTML page can be displayed within your browser. The contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"urls.py")," can be seen below."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"from django.urls import path\nfrom wishlist.views import show_wishlist\n\napp_name = 'wishlist'\n\nurlpatterns = [\n    path('', show_wishlist, name='show_wishlist'),\n]\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Also register the ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," application in ",(0,i.kt)("inlineCode",{parentName:"p"},"urls.py")," that is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"project_django")," folder by adding the following code snippet below to ",(0,i.kt)("inlineCode",{parentName:"p"},"urlpatterns")," variable."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"path('wishlist/', include('wishlist.urls')),\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run your Django project with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"python manage.py runserver")," and open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/wishlist/"},"http://localhost:8000/wishlist/")," in your favorite browser to see the page that you've created."))),(0,i.kt)("p",null,"If a page appears containing ",(0,i.kt)("em",{parentName:"p"},"wishlist")," table, congratulations! You've successfully done ",(0,i.kt)("em",{parentName:"p"},"routing")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"views")," function that can ",(0,i.kt)("em",{parentName:"p"},"rendering")," an HTML page. However, as you can see, there's no data on that ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," table. You also can see it's not clear who the ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," belongs to, so you want to display your name on the ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," page. Now, you will learn how to display data to HTML from the Django local ",(0,i.kt)("em",{parentName:"p"},"database")," as well as the data or variables that you've defined in your ",(0,i.kt)("inlineCode",{parentName:"p"},"views.py")," file."),(0,i.kt)("h2",{id:"tutorial-connecting-models-with-views-and-templates"},"Tutorial: Connecting Models with Views and Templates"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the views function you have created, import the models you created earlier into the views.py file. You will use this class to retrieve data from the database. Examples are as follows."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"from django.shortcuts import render\nfrom wishlist.models import WishlistItem\n...\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the code snippet below to the function you created earlier. This code snippet serves to call the query function to the database model and store the query results into a variable. Adjust the contents of the variable name with your name, yes."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"data_wishlist_item = WishlistItem.objects.all()\ncontext = {\n    'list_item': data_wishlist_item,\n    'name': 'Cinoy'\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add context as the third parameter to the render function return in the function you created earlier. The data contained in the context variable will also be rendered by Django so that later you can display the data on the HTML page."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'return render(request, "wishlist.html", context)\n')))),(0,i.kt)("p",null,"Now, you will learn to map data that has been rendered in the views function to be able to display it on an HTML page. To do this mapping, you can use the special template syntax found in Django, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"{{data}}"),". If you're interested in knowing more about the syntax of Django's templates, you can read and learn more about Django's template tags documentation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the HTML file that you created earlier in the templates folder in the wishlist directory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change Fill me! which is in the HTML ","<","p",">"," tag to ",(0,i.kt)("inlineCode",{parentName:"p"},"{{name}}")," to display your name on the HTML page. Examples are as follows."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"...\n<h5>Name: </h5>\n<b>{{name}}</b>\n...\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To display a list of items into a table, you need to iterate over the ",(0,i.kt)("inlineCode",{parentName:"p"},"list_item")," variable that you have rendered into the HTML. Note that you can't call the item list directly as you did in step 2 because the ",(0,i.kt)("inlineCode",{parentName:"p"},"list_item")," variable is a container containing objects. You also need to call the specific variable/attribute name of the object in the container to call the data from that object. Examples are as follows."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"...\n{% comment %} Add data below {% endcomment %}\n{% for item in list_item %}\n    <tr>\n        <th>{{item.item_name}}</th>\n        <th>{{item.item_price}}</th>\n        <th>{{item.description}}</th>\n    </tr>\n{% endfor %}\n...\n")))),(0,i.kt)("p",null,"Now, try to refresh the page and see if the data you entered into the views also appears on the web page. If it appears, then congratulations! You've successfully connected models with views and templates while learning the basics of Django's template syntax."),(0,i.kt)("p",null,"Next, please add, commit, and push the changes you've made to save them to the GitHub repository."),(0,i.kt)("h2",{id:"the-final-word"},"The Final Word"),(0,i.kt)("p",null,"Finally finished! Congratulations, you've made it this far following the tutorial and learning the ins and outs of Django!"),(0,i.kt)("p",null,"After you have completed all of the tutorials above, hopefully now you will understand better and in the future, you will be able to explore more with the Django framework in creating a web application."),(0,i.kt)("p",null,'A few tips and tricks to survive as a developer in the future; Familiarize yourself with google, youtube and stack overflow. This website is the "light" that will help you deal with the errors you encounter while coding! In fact, a Software Engineer who works at Google always "learns" from the three websites mentioned when they are faced with problems. Therefore, do not hesitate to tell them!'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pbs.twimg.com/media/EWDAn-XWkAs3Y5T.jpg",alt:"Petuah Hidup sebagai Anak Fasilkom"})),(0,i.kt)("h3",{id:"happy-coding"},"HAPPY CODING!"),(0,i.kt)("h2",{id:"further-reading-resources"},"Further Reading Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/4.1/"},"Django Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.djangoproject.com/en/4.1/howto/initial-data/"},"Created Initial Data in Django Project")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/python_web_development_libraries/python_web_development_libraries_django_framework.htm"},"Django Framework")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://steelkiwi.com/blog/why-django-best-web-framework-your-project/"},"Why Django is the Best Web Framework for Your Project"))),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mohamad Rifqy Zulkarnaen"),(0,i.kt)("li",{parentName:"ul"},"Muhammad Athallah"),(0,i.kt)("li",{parentName:"ul"},"Muhammad Azis Husein (EN translator)"),(0,i.kt)("li",{parentName:"ul"},"Firlandi A. R. Ansyari (EN translator)"),(0,i.kt)("li",{parentName:"ul"},"Winaldo Amadea (EN translator)"),(0,i.kt)("li",{parentName:"ul"},"Zuhal 'Alimul Hadi (EN translator)")),(0,i.kt)("h2",{id:"credits"},"Credits"),(0,i.kt)("p",null,"This tutorial is developed based on ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/PBP-2021/pbp-lab"},"PBP Odd 2021")," written by the 2021 Platform Based Development/Programming Teaching Team (",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/prakashdivyy"},"@prakashdivyy"),"). All the tutorials and instructions listed in this repository are designed in such a way that students taking a Platform-Based Programming course can complete the tutorials during a lab session."))}d.isMDXComponent=!0}}]);