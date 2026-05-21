<template>
	<div class="card col-md-3">
	        <img :src="project.image" class="card-img-top card-img" alt="...">
	        <div class="card-body">
	        <h5 class="card-title">{{project.title}}</h5>
	        <p class="card-text">
	            {{project.description}}
	        </p>
	        
	        </div>
	    </div>
</template>

<script setup>
	import {defineProps} from 'vue';

	// define the props
	//sample prop that will be passed in project:
		/*
			{  
        "id": 1,
        "title": "E-commerce API Documentation",
        "description": "Dynamic E-Commerce Workflow Management. The system features dynamic routes for order processing, real-time inventory updates, and secure user authentication. It also supports seamless automated order reporting and comprehensive product management.\n Documented Backend API published publicly using Postman.",
        "image": "/images/myProjects/1_project.svg"
    }
		*/
	defineProps({
		project: Object
	})
</script>