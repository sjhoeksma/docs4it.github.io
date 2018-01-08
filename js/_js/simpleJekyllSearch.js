(function($) {
    $.fn.simpleJekyllSearch = function(options) {
        var settings = $.extend({
            jsonFile        : '/search.json',
            jsonLastSearch  : 3,
            jsonFormat      : 'title,tags,categories,content,url,date',
            template : '<li><article><a href="{url}"><span class="entry-category">{categories}</span><span class="search-snippet"><b><i>{title}</i></b> - {content}</span><span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',
            searchResults   : '.search-results',
            limit           : '50',
            noResults       : '<p>No Results :(</p>'
        }, options);

        var properties = settings.jsonFormat.split(',');

        var jsonData = [],
            origThis = this,
            searchResults = $(settings.searchResults);

        if(settings.jsonFile.length && searchResults.length){
            $.ajax({
                type: "GET",
                url: settings.jsonFile,
                dataType: 'json',
                success: function(data, textStatus, jqXHR) {
                    jsonData = data;
                    registerEvent();
                },
                error: function(x,y,z) {
                    console.log("***ERROR in simpleJekyllSearch.js***");
                    console.log(x);
                    console.log(y);
                    console.log(z);
                    // x.responseText should have what's wrong
                }
            });
        }


        function registerEvent(){
            origThis.keyup(function(e){
                if($(this).val().length){
                    var search = $(this).val();
                    writeMatches(performSearch(search),search);
                }else{
                    clearSearchResults();
                }
            });
        }
      
        function highlightPartial(subject, search) {
          if (!search || !subject) return subject;
          const start = String.fromCharCode(1);
          const end = String.fromCharCode(2);
          var searchTerms = search.trim().split(' ');
          for (var i in searchTerms) 	{
            const searchRegEx =  new RegExp("(?=.*)(" + searchTerms[i] + ")(?=.*)","ig");
            subject = subject.replace(searchRegEx, function(match, text) {
             return start + text + end; //We use this taging top prevent using the tag in search
            });
          }
          return subject.replace(new RegExp('('+start+')','ig'),'<b class="ais-Highlight">')
                        .replace(new RegExp('('+end+')','ig'),'</b>');
        }

        function performSearch(str){
          var matches = [];
          const regexStr = '(?=.*' + str.split(/\ |\s/).join(')(?=.*') + ')';
          const searchRegEx = new RegExp(regexStr + ".+", 'gi');
            $.each(jsonData,function(i,entry){
                for(var i=0;i<=settings.jsonLastSearch;i++) //We only search first 4 fields
                    if(entry[properties[i]] !== undefined 
                      && entry[properties[i]].match(searchRegEx)
                    ) {
                        matches.push(entry);
                        i=properties.length; //Break
                    }
            });
            return matches;

        }

        function writeMatches(m,search) {
            clearSearchResults();
            searchResults.append( $(settings.searchResultsTitle) );

            if (m.length) {
                $.each(m,function(i,entry){
                    if(i<settings.limit){
                        var output=settings.template;
                        for(var i=0;i<properties.length;i++){
                            var regex = new RegExp("\{" + properties[i] + "\}", 'g');
                            if (i<=settings.jsonLastSearch) {
                               output = output.replace(regex, highlightPartial(entry[properties[i]],search));    
                            } else {
                              output = output.replace(regex, entry[properties[i]]);
                            }
                        }
                        searchResults.append($(output));
                    }
                });
            }else{
                searchResults.append( settings.noResults );
            }


        }

        function clearSearchResults(){
            searchResults.children().remove();
        }
    }
}(Zepto));
