# The Truth is Out There!

## Project Overview

The purpose of this project was to create a website that provides easy, intuitive and filterable access to data collected on UFO sightings across the world. Specifically, the data utilized includes such metrics as the location of the UFO sighting, the shape of the UFO, a description of the sighting, and the date of the sighting. 

Using JavaScript, we looped interfaced with this data and used it to populate an HTML table (which the end-user can access via the website). Additionally, using JavaScript, we created numerous fields that the end-user can sort by (i.e. if the user wants to identify sightings in specific states, on specific dates, of a specific type, etc.).

We also utilized Bootstrap and CSS to stylize our website and to make it visually appealing. 

## Results

The final website is intuitive and easy to use. Upon navigating to the site, the user is greeted by the home page, which includes the table containing all of the data discussed above (unfiltered):

If the user desires to filter the data, it is as simple as entering the desired data into the "Filter Search" fields. NOTE: there are placeholders that pre-populate the fields that serve to demonstrate the format of the searchable values. The user MUST follow this format in his or her searches (including case sensitivity): 

The user also has the ability to add multiple filters simultaneously, and the resulting table will only output results that match of these filters. In the below example, we have searched for sightings in California that took place on January 1, 2010, and were identified as lights:

If the user wishes to clear the filters, the user can simply click "UFO Sightings" on the top of the homepage to default to the origial unflitered view:

## Summary

One drawback of the current website design is the case and format sensitivity for the search parameters. In the future, we plan on resolving this by: 

- Allowing users to search for variants of the search parameters (i.e. California can be CA, ca, California, california, Cali, etc.)
- Making the search parameters be case insensitive (i.e. so that there is no difference between "Light" and "light")

Additionally, as an accessibility tool, it may be useful to enable a toggle that allows users to switch between "light mode" and "dark mode" when viewing the site. 






