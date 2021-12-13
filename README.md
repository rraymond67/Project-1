# App Title: The Hall of Heroes

### App Description: A web application that serves as a library for most of the comic book superheors created. The user wil be able to search any comic book heroes by name and it will return their alias name, their superpowers and the first comic issue they appeared in for whichever publisher.

### API: https://comicvine.com/api/

### API Snippet:

```
<?xml version="1.0" encoding="utf-8"?>
<response>
    <error>
        <![CDATA[OK]]>
    </error>
    <limit>100</limit>
    <offset>0</offset>
    <number_of_page_results>100</number_of_page_results>
    <number_of_total_results>148269</number_of_total_results>
    <status_code>1</status_code>
    <results>
        <character>
            <aliases/>
            <api_detail_url>
                <![CDATA[https://comicvine.gamespot.com/api/character/4005-168397/]]>
            </api_detail_url>
            <birth/>
            <count_of_issue_appearances>2</count_of_issue_appearances>
            <date_added>2021-04-09 18:21:09</date_added>
            <date_last_updated>2021-04-20 11:14:01</date_last_updated>
            <deck/>
            <description/>
            <first_appeared_in_issue>
                <api_detail_url>
                    <![CDATA[https://comicvine.gamespot.com/api/first_appeared_in_issue/4000-737752/]]>
                </api_detail_url>
                <id>737752</id>
                <name>
                    <![CDATA[Into the Crucible Part One: The People's Champion]]>
                </name>
                <issue_number>13</issue_number>
            </first_appeared_in_issue>
            <gender>2</gender>
            <id>168397</id>
            <image>
                <icon_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/square_avatar/11140/111402998/7903705-banti.jpg]]>
                </icon_url>
                <medium_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/scale_medium/11140/111402998/7903705-banti.jpg]]>
                </medium_url>
                <screen_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/screen_medium/11140/111402998/7903705-banti.jpg]]>
                </screen_url>
                <screen_large_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/screen_kubrick/11140/111402998/7903705-banti.jpg]]>
                </screen_large_url>
                <small_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/scale_small/11140/111402998/7903705-banti.jpg]]>
                </small_url>
                <super_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/scale_large/11140/111402998/7903705-banti.jpg]]>
                </super_url>
                <thumb_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/scale_avatar/11140/111402998/7903705-banti.jpg]]>
                </thumb_url>
                <tiny_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/square_mini/11140/111402998/7903705-banti.jpg]]>
                </tiny_url>
                <original_url>
                    <![CDATA[https://comicvine.gamespot.com/a/uploads/original/11140/111402998/7903705-banti.jpg]]>
                </original_url>
                <image_tags>
                    <![CDATA[All Images]]>
                </image_tags>
            </image>
            <name>
                <![CDATA[ Banti]]>
            </name>
            <origin>
                <api_detail_url>
                    <![CDATA[https://comicvine.gamespot.com/api/origin/4030-4/]]>
                </api_detail_url>
                <id>4</id>
                <name>
                    <![CDATA[Human]]>
                </name>
            </origin>
            <publisher>
                <api_detail_url>
                    <![CDATA[https://comicvine.gamespot.com/api/publisher/4010-31/]]>
                </api_detail_url>
                <id>31</id>
                <name>
                    <![CDATA[Marvel]]>
                </name>
            </publisher>
            <real_name/>
            <site_detail_url>
                <![CDATA[https://comicvine.gamespot.com/banti/4005-168397/]]>
            </site_detail_url>
        </character>
```

### Wiredframes

### MVP:

- **Add a gif background similar to the comic pages**
- **Add a character place holder which will be a simple gray figure that will fade away to the seacrh hero**
- **Add a text description of the superhero power**
- **Add a favorite superhero favorite button**
- **Put the superhero name, theri alias and the first comic they appeared in**

### Post-MVP:

- **Add a special effect for the search buttons**

### Goals:

| Day    | Deliverable                                       | Status |
| ------ | ------------------------------------------------- | ------ |
| Dec 12 | API Search/ Repo ReadMe/                          |
| Dec 13 | Student inputs/ Poject Approval                   |
| Dec 14 | HTML Setup/ Js setup/ Result from Api/ Pseudocode |
| Dec 15 | MVP implimantation/ Post MVP                      |
| Dec 16 | CSS styling/ add more Post MVP if possible        |
| Dec 17 | Presentations                                     |

### Priority Matrix:

![Matrix](https://whimsical.com/097ecbe8-a1a8-46f2-a572-a553e35944b9)

### Timeframes:

| Component                                                | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic HTML, CSS, JS setup                                |    M     |      1hrs      |
| Setting up API and axios function                        |    H     |      4hrs      |
| Response data setup/fetching                             |    H     |      2hrs      |
| Filter through the response data                         |    H     |      3hrs      |
| Add data to axios function                               |    H     |      3hrs      |
| Incorporating the user input and API call                |    H     |      4hrs      |
| Debugging of the user input/API call                     |    H     |      2hrs      |
| Add placeholder superhero figure                         |    M     |      3hrs      |
| Web page layout                                          |    H     |      3hrs      |
| CSS styling of heros information from search API results |    M     |      6hrs      |
| CSS styling for backgound images                         |    L     |      3hrs      |
| Create buttom to save favorite heroes                    |    L     |      3hrs      |
| Create an interactive serch botton                       |    L     |      3hrs      |
| Total                                                    |    H     |      hrs       |
