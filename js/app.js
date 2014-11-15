App = Ember.Application.create();

App.Router.map(function() {
  this.route("about");
  this.route("collections");
  this.route("comparisons");
  this.resource("exhibits", function(){
    this.resource("exhibit", { path: "/:exhibit_id"});
  });
  this.route("notes");
  this.route("gear");
});
/*
 * COLLECTIONS CODE STARTS HERE
 */
// Collections Route
App.CollectionsRoute = Ember.Route.extend({
  model: function() {
    return [
	  {
        title: "Three Bar Frame",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions. The three truss bars are fixed to the ceiling and wall while a heavy weight hangs from the corner.",
        image: "algor/14/Images/Exercise A-RESULTS-0.PNG",
		link1: "algor/14/a.htm",
		link2: "algor/14/Exercise A_rpt.htm"
      }, {
        title: "Truss Frame",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise B-RESULTS-0.PNG",
		link1: "algor/14/b.htm",
		link2: "algor/14/Exercise B_rpt.htm"
      }, {
        title: "Support Beam Under Gravity",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise C-RESULTS-0.PNG",
		link1: "algor/14/g.htm",
		link2: "algor/14/Exercise C_rpt.htm"
      }, {
        title: "Thick Walled Cylinder",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise D-RESULTS-0.PNG",
		link1: "algor/14/h.htm",
		link2: "algor/14/Exercise D_rpt.htm"
      }, {
        title: "Flat Plate Under Pressure",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise E-RESULTS-0.PNG",
		link1: "algor/14/i.htm",
		link2: "algor/14/Exercise E_rpt.htm"
      }, {
        title: "Cantilever Beam",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise F-RESULTS-0.PNG",
		link1: "algor/14/j.htm",
		link2: "algor/14/Exercise F_rpt.htm"
      }, {
        title: "Comparing 3-D with 2-D Elements",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model comparing 3-D Elements with 2-D Elements.",
        image: "algor/14/Images/Exercise G-RESULTS-0.PNG",
		link1: "algor/14/b.htm",
		link2: "algor/14/Exercise G_rpt.htm"
      }, {
        title: "Convergence on a Notched Plate",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model.: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise H-RESULTS-0.PNG",
		link1: "algor/14/h.htm",
		link2: "algor/14/Exercise H_rpt.htm"
      }, {
        title: "Hanger Bracket",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise I-RESULTS-0.PNG",
		link1: "algor/14/h.htm",
		link2: "algor/14/Exercise I_rpt.htm"
      }, {
        title: "Knuckle Shaft",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise J-RESULTS-0.PNG",
		link1: "algor/14/i.htm",
		link2: "algor/14/Exercise J_rpt.htm"
      }, {
        title: "Nut Cracker",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise K-RESULTS-0.PNG",
		link1: "algor/14/j.htm",
		link2: "algor/14/Exercise K_rpt.htm"
      }, {
        title: "Heated Block",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material under the given loading conditions.",
        image: "algor/14/Images/Exercise L-RESULTS-0.PNG",
		link1: "algor/14/i.htm",
		link2: "algor/14/Exercise L_rpt.htm"
      }, {
        title: "Linear Beam",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model: The stress in the part will not exceed the allowable yield strength for the material using a Linear Elastic Material Model under the given loading conditions. However, running this same model with Non-Linear Material Model yields a different result. GO TO THE COMPARE PAGE TO SEE TH RESULTS FOR BOTH ",
        image: "algor/14/Images/Exercise M-RESULTS-0.PNG",
		link1: "algor/14/j.htm",
		link2: "algor/14/Exercise M_rpt.htm"
      }        
    ];
  }
});

// Customize the Collections component
App.SingleCollectionComponent = Ember.Component.extend({
  tagName: "article",
  classNames: ["collectionArticleClass cf"]
});
/*
 * COMPARISONS CODE STARTS HERE
 */

// Comparisons Route
App.ComparisonsRoute = Ember.Route.extend({
  model: function() {
     return [
	  {
        title: "3-D Elements vs. 2-D Elements",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic Material Model comparing 3-D Elements with 2-D Elements.",
        image1: "algor/13/Images/Compare-RESULTS-0.PNG",
		image2: "algor/13/Images/Compare 2D-RESULTS-0.PNG",
		link1: "algor/13/j.htm",
		link2: "algor/13/Compare 2D_rpt.htm"
      }, {
        title: "Linear vs. Non-Linear Properties",
        copy: "ANALYSIS RESULTS for Static Stress using a Linear Elastic and Non-Linear Plastic Material Models. This presentation demonstrates the importance of substantiating assumptions in the input for a model. Analysis details for the Non-Linear Plastic Material Model Here:",
        image1: "algor/13/Linear/Images/Exercise H-RESULTS-0.PNG",
		image2: "algor/13/Nonlinear/Images/Exercise H-RESULTS-0.PNG",
		link1: "algor/13/j.htm",
		link2: "algor/13/Nonlinear/Exercise H_rpt.htm"
      }, {
        title: "Notched Plate, Mesh Density: 3200",
        copy: "ANALYSIS RESULTS AND MESHED MODEL for Static Stress using a Linear Elastic Material Model.",
        image1: "algor/13/Images/Exercise J 3200-RESULTS-0.PNG",
		image2: "algor/13/Images/Exercise J 3200TITLE.PNG",
		link1: "algor/13/j.htm",
		link2: "algor/13/Exercise J 3200_rpt.htm"
      }, {
        title: "Notched Plate, Mesh Density: 1600",
        copy: "ANALYSIS RESULTS AND MESHED MODEL for Static Stress using a Linear Elastic Material Model.",
        image1: "algor/13/Images/Exercise J 1600-RESULTS-0.PNG",
		image2: "algor/13/Images/Exercise J 1600TITLE.PNG",
		link1: "algor/13/i.htm",
		link2: "algor/13/Exercise J 1600_rpt.htm"
      }, {
        title: "Notched Plate, Mesh Density: 800",
        copy: "ANALYSIS RESULTS AND MESHED MODEL for Static Stress using a Linear Elastic Material Model.",
        image1: "algor/13/Images/Exercise J 800-RESULTS-0.PNG",
		image2: "algor/13/Images/Exercise J 800TITLE.PNG",
		link1: "algor/13/i.htm",
		link2: "algor/13/Exercise J 800_rpt.htm"
      }, {
        title: "Notched Plate, Mesh Density: 400",
        copy: "ANALYSIS RESULTS AND MESHED MODEL for Static Stress using a Linear Elastic Material Model.",
        image1: "algor/13/Images/Exercise J 400-RESULTS-0.PNG",
		image2: "algor/13/Images/Exercise J 400TITLE.PNG",
		link1: "algor/13/i.htm",
		link2: "algor/13/Exercise J 400_rpt.htm"
      }, {
        title: "Notched Plate, Mesh Density 200",
        copy: "ANALYSIS RESULTS AND MESHED MODEL for Static Stress using a Linear Elastic Material Model.",
        image1: "algor/13/Images/Exercise J 200-RESULTS-0.PNG",
		image2: "algor/13/Images/Exercise J 200TITLE.PNG",
		link1: "algor/13/a.htm",
		link2: "algor/13/Exercise J 200_rpt.htm"
      }        
    ];
  }
});

// Customize the Comparisons component
App.SingleComparisonComponent = Ember.Component.extend({
  tagName: "article",
  classNames: ["collectionArticleClass cf"]
});


/*
 * CONTROLLERS CODE STARTS HERE
 */

// Route for all Exhibits
App.ExhibitsRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON("js/exhibits.json").then(function(data) {
      return data.exhibits;
    });
  }
});

// Route for a single Exhibit
App.ExhibitRoute = Ember.Route.extend({
  model: function(params) {
    return $.getJSON("js/exhibits.json").then(function(data) {
      var modelId = params.exhibit_id - 1;
      data.exhibits.title = data.exhibits[modelId].title;
      data.exhibits.artist_name = data.exhibits[modelId].artist_name;
      data.exhibits.exhibit_info = data.exhibits[modelId].exhibit_info;
      data.exhibits.image = data.exhibits[modelId].image;
      return data.exhibits;
    });
  }
});

// Array controller...decorates all model data
App.ExhibitsController = Ember.ArrayController.extend({
  totalExhibits: function(){
    return this.get("model.length");
  }.property("@each")
});

// Object controller...decorates a single piece of model data
App.ExhibitController = Ember.ObjectController.extend({
  exhibitTitle: function(){
    return this.get("title") + " - " + this.get("artist_name");
  }.property("artist_name", "title")
});

/*
 * NOTES CODE STARTS HERE
 */

 App.Note = DS.Model.extend({
  copy: DS.attr()
});

App.NotesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("note");
  }
});

App.NotesController = Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var copy = this.get("newNote");
      if (!copy) {
        return false;
      }

      var note = this.store.createRecord("note", {
        copy: copy
      });

      this.set("newNote", "");
      note.save();
    }
  }
});

App.NoteController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    editNote: function() {
      this.set("isEditing", true);
    },
    saveNewNote: function() {
      this.set("isEditing", false);
      
      if (!(this.get("model.copy"))) {
        this.send("deleteNote");
      } else {
        this.get("model").save();
      }
    },
     deleteNote: function() {
      this.get("model").deleteRecord();
      this.get("model").save();  
    }
  }
});

App.EditNote = Ember.TextArea.extend({
  attributeBindings: ["cols", "rows"],
  cols: 50,
  rows: 10
});

Ember.Handlebars.helper("update-note", App.EditNote);

App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: "samocaNotes"
});