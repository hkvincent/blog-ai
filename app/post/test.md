# Read Me

REMEMBER TO CHECK NULL - VINCENT !!!

and using try catch for the logic that does not need to process further, like the tracking event, no matter whether data is sent successfully or not, the UI part does not be affectted.



## Doc hierarchy (for txt only)

"====" is the first layer representing the charter, every charter should have 4 new lines after the previous charter.

"----" is the second layer indicating the title, every layer should have 3 new lines between them. but should have 1 new line for the father character layer.

:  after the description is 3rd layer is used to split the paragraph if the sentence is too long should be split into another line and indent with a tab to the above line.

between each : can have one new line to be the split.

->  is the fourth layer, if the sentence is too long should be split into another line and indent with two spaces to the above line. like YAML

the whole line with =  will be split into another Doc file, just place it on this Doc until it is more enough.







## Color tag

red: important, P1 issue needs on hold other tasks for finishing this task ASAP

yellow: in progress task, meet the target so far

green: finish task and pass

blue: schedule task, which has a plan when and how to do it

purple: do it later task, does not have any schedule and needs to discuss later.







## Table of contents

1.Project Useful

2.Web set up ENV

3.App set up ENV

4.Operation

5.Code Design For Server Side

6.Code Design For Client Side(Flutter)

7.Code Design For Client Side(Web)

8.Test Case

9.Database

10.CR or Bug

11.Tech Stack









# Project Useful

## Internal Tools

email:Mozilla

e-system:

http://eleave.yawin.yesasia.com/eattendance/

WIFI:

old: http://eform.yawin.yesasia.com/eform/index.php?src=it.php

guest: https://form.jotform.com/211359423327453

staff: https://form.jotform.com/211362545854457

VNC(romote tools):

connect Mac -> 192.168.123.73(Pro) or 192.168.120.48(Air)

Xyfrontend205

Oracle CRM Responsys:

https://interact.rsys9.net/authentication/login/LoginPage

username:yesstyle.IT

password:yesstyle.IT2022!

DataDog:

https://app.datadoghq.com/apm/home?env=production

Team:

315049372 csn25y1k

ESS:

https://www.hrone.com.hk/Yesstyle/HROneESS/ESS_EmpTaxReport.aspx

Share point:

https://yawin.sharepoint.com/sites/YAIntranet







## URL

link for local:

https://it-vincentc.yawin.yesasia.com:8443/en/home.html	(yesstyle)

http://it-vincentc.yawin.yesasia.com:8080/global/en/home.html (yesasia)

http://it-vincentc.yawin.yesasia.com:28080/mgmt

http://${dev.subdomain}.yawin.yesasia.com:38889/

p.s -> subdomain is set on maven setting file dev. subdomain

link for display with apache server:

```
http://it-moosel.yawin.yesasia.com:38888/page/SplashPage.html#
```
http://it-vincentc.yawin.yesasia.com:38888/page/SplashPage.html

link for UAT:

https://uat.yesstyle.com/en/home.html (yesstyle cloud)

https://uat.yesasia.com/ (YA cloud)

https://uat.asianbeautywholesale.com/en/home.html (ABW cloud)

https://uat-jewelfish.yawin.yesasia.com/v5-mgmt-tool/login	(jewelfish cloud)





link for pre-Prodcution:

yesstyle:

http://warmup.ys.yawin.yesstyle.com/

http://warmup.ys.yawin.yesstyle.com/zh_TW/home.html

if need to check pre-production after warm-up deployed, should say on Sky to check for holding the production deploys:

I check warmup YS

after checking, if there is no problem found on pre-production also need to say on Sky:

checked, no problem with my part, thanks.

since warmup is used for checking the website is broken or not, so App should be no need to check.

new version warmup:

using request header:

YSZpI8fQqeWHWARMUP true

yesasia:

http://warmup.ya.yawin.yesasia.com/global/en/home.html



ABW:

https://www.asianbeautywholesale.com/en/home.html



ABW and YACODE:

ABWZpI8fQqeWHWARMUPABW

YAZpI8fQqeWHWARMUPYA



link for wrike: (timetable)

the man day and working plan websie

```
https://www.wrike.com/workspace.htm?acc=2192533#/timesheet
```
vincent chan



link for wiki project:

http://wiki/wiki/index.php/Frontend:Projects

link for release app:

http://wiki/wiki/index.php?title=Frontend:Projects:2022:YS_Mobile_app_v4.4.26



link for CRM support excel:

https://yawin-my.sharepoint.com/:x:/g/personal/ys-pmo_yesstyle_com/EVahc6x7UglLsZ40zVY1W0wBZ8XZZCH5xnrYw6nEpgWLzg?wdOrigin=TEAMS-ELECTRON.p2p.bim&wdExp=TEAMS-CONTROL&wdhostclicktime=1657781131113

link for CRM wrike task:

```
https://www.wrike.com/workspace.htm?acc=2192533#folder/914864501/tableview?filters=&overlayEntityId=914864569&spaceId=-1&viewId=90369045
```


jewelfish:

for setting translation and being other tools.



local: http://it-vincentc.yawin.yesasia.com:28080/mgmt

uat: http://10.1.4.186:28080/v5-mgmt-tool/ -> https://uat-jewelfish.yawin.yesasia.com/v5-mgmt-tool/login -> https://uat-jewelfish.yawin.yesasia.com/v5-mgmt-tool/login?jewelfishLogin=true

prod: http://jewelfish.yawin.yesasia.com/v5-mgmt-tool/



run the cronjob:

cd jewelfish\jewelfish-schedulejob

java -Xmx2048m -DisMassUpdate=false -DfasterSpringInit=false -jar target/jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar

the config file jewelfish-scheduleJob-oracleCrmJob.xml is used to set which cronjob runs.



debug mode:

1.In IntelliJ, the drop-down list next to the run button

2.click the + sign

3.select JAR application

4.name it as jewelfish-scheduleJob-oracleCrmJob

5.Path to JAR is : D:\vincent\dev\frontend\workspace.intellij\jewelfish\jewelfish-schedulejob\target\jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar

6.VM option is : -Xmx2048m -Duser.timezone=GMT -DisMassUpdate=true -DfasterSpringInit=false

7.working directory is : D:\vincent\dev\frontend\workspace.intellij\jewelfish\jewelfish-schedulejob



run error with key Illegal:

```
need to install the cert: http://wiki/wiki/index.php/Frontend:IT_Team:Setup:Java_Installation#Java_additional_installation
```
1.uncomment crypto.policy=unlimited in $JAVA_HOME/jre/lib/security/java.security and another JRE, total two JRE need to be uncomment.

2.download the cert.

3.install cert with the below command:

"%JAVA_HOME%\jre\bin\keytool" -import -trustcacerts -alias Secure_trust -file c:\gc_certs\Secure_trust.cer -keystore "C:\Program Files\Java\jdk1.8.0_151\jre\lib\security\cacerts"

"%JAVA_HOME%\jre\bin\keytool" -import -trustcacerts -alias wildcard.gcsip.nl -file c:\gc_certs\wildcard.gcsip.nl.cer -keystore "C:\Program Files\Java\jdk1.8.0_151\jre\lib\security\cacerts"

4.create floder on c:\frontend-jewelfish

5.rebuild all modules.



time issue:

since the job retrieves data is using the local time. so we need to modify the file oracleCrmJob.masterContactListCustomerProfileUpdate.lastUpdatedTimeFile in C:\frontend-jewelfish

before the data creation time.



p.s.

when we need to sync data we need to ask in Bugzilla for data sync



Bugzilla:

https://bugzilla.yawin.yesasia.com/content_bugzilla/

Bugzilla number will be the part of the name of the HTML page from the HTML team.

need to add this with logic to display.

status meaning:

1. CONFIRMED -> CR or BUG is confirmed.

2. IN_PROGRESS -> assigned to a teammate and developing

3. READY_FOR_REVIEW -> ask a teammate to do the code view and launch on UAT.

4. READY_FOR_LAUNCH -> UAT passed ready for Production

5. RESOLVED -> released to production. -> said something in Bugzilla after deployed like

Hi team,

This change has been deployed to production YS, please feel free to let me know if there are any problems.

Thanks,

Vincent Chan

6. VERIFIED -> production is passed and verified by user.

7. bug search ->

https://bugzilla.yawin.yesasia.com/content_bugzilla/buglist.cgi?bug_status=UNCONFIRMED&bug_status=CONFIRMED&bug_status=IN_PROGRESS&bug_status=RESOLVED&bug_status=VERIFIED&component=Bugs%20%2F%20Errors%20%2F%20Problems&component=Mobile%20Site%20UAT&component=New%20Requests%20%2F%20Enhancements&component=Projects&component=Regular%20Tasks&component=TBD&component=UAT&list_id=494804&order=bug_id%20DESC&product=IT%20-%20Frontend%20-%20ABW&product=IT%20-%20Frontend%20-%20HM&product=IT%20-%20Frontend%20-%20Management%20Tool%20%26%20Others&product=IT%20-%20Frontend%20-%20YA&product=IT%20-%20Frontend%20-%20YS&product=IT%20-%20Frontend%20-%20YW&product=IT%20-%20Frontend%20-%20YWK&query_based_on=new%20a&query_format=advanced&resolution=---





## Credit Card

reference:http://wiki/wiki/index.php/Frontend:Secure_Checkout

VISA : 4646 4646 4646 4644 	03/2030    737

MASTER : 5136 3333 3333 3335 	03/2030    737

JCB : 3569 9900 1009 5841 	03/2030    737

AE : 3700 0000 0000 002 	03/2030    7373







## Useful Links

WELCOME TO YESSTYLE

Here are Useful Links for you to have the best start in our Company!

Websites:

Intranet: http://admin/

eLeave: http://eleave.yawin.yesasia.com/eleave/

eAttendance: http://eleave.yawin.yesasia.com/eattendance/

Meeting Room Booking System: https://bugzilla.yawin.yesasia.com/mrbs/day.php

Staff Price Checking: http://backend:8080/erp/queryStaffPrice.do ip is : 172.31.5.136

Facebook’s Workplace: https://my.workplace.com/

Skype: https://www.skype.com/en/



Documentation:

Employee Handbook: http://admin/ListPost.aspx?nid=6

Organization Directory: http://admin/ListPost.aspx?nid=11

Policy & Procedure: http://admin/ListPost.aspx?nid=8

Company Form: http://admin/ListPost.aspx?nid=21

Office Wi-Fi Registration: http://eform.yawin.yesasia.com/eform/it.php







## VPN

VPN Username: vincent.chan

VPN password: 'nlX(R@mOB2T

REMOTE PC IP: 192.168.123.176



step:

1. download OpenVPN in Home PC and import the certificate file downloaded from office one driver on it.

2. enter the username and password click the connect after OpenVPN is installed.

3. after the OpenVPN connection is established, the network of our Home PC is using the office network.

4. using Remote desktop connection in Home PC for connection to Office PC.

5. Enter your office PC private IP like 192.168 and user name to connect Office PC, the format of the user name is “yawin\XXXXXXX”

6. after IP and username are inputted the windows login will pop up to ask for the password.

7. environment is established after password input.

ps. When you connected the VPN, no internet access allow from your home PC, only allow to connect to your office PC







## Deeplink Config Check

check the deeplink was configed in server:

https://app-site-association.cdn-apple.com/a/v1/yesstyle.com







## AWS

Production - https://yaysprodcloud.signin.aws.amazon.com/console

UAT - https://yaysuat.signin.aws.amazon.com/console

account id: yaysprodcloud

username: IT.FE.Vincent.Chan

pass: aws574562411X





## page Speed Test

https://pagespeed.web.dev/







# Web set up ENV



## Wicket

### Preparation

1. IP address, email, update FE users list (For AWS SES) (For Cloud Solution Team) -> https://yawin-my.sharepoint.com/:x:/r/personal/danny_hui_yesstyle_com/_layouts/15/Doc.aspx?sourcedoc=%7BC69AD0F2-038F-4E8A-AE1C-510F60C396C3%7D&file=%E6%B4%BB%E9%A0%81%E7%B0%BF.xlsx&action=editnew&mobileredirect=true&wdNewAndOpenCt=1643362441009&ct=1643362441009&wdPreviousSession=f7d122a2-0a68-4425-9a0a-d040a4088f34&wdOrigin=OFFICECOM-WEB.START.NEW&cid=4cf9c060-9320-4d51-9d9c-9e8ea3bff08f

2. Database dev account : https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=99259

3. AWS account : https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=105582

4. AWS connection : https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=87261

5. Wrike accont : check with Jacky

6. Prodction Database access(can be arranged later) : https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=99257

7. ask system to install nodejs,android-studio,maven,memcached

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=106326

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=105562





### Setup

1. instruction: http://wiki/wiki/index.php/Frontend:IT_Team:New_Member_Starts_Here

2. install the java and set the environment path.

   1. set the JAVA_HOME and use the SYSTEM | Path %JAVA_HOME%\bin\

3. install maven and set the path

   1.  update c:\apache-maven-3.2.5\bin\mvn.bat | set MAVEN_OPTS=-Xmx1024m -XX:MaxPermSize=192m
   2. update the environment path. MAVEN_HOME : C:\apache-maven-3.2.5 and PATH : %MAVEN_HOME%\bin

4. .install intellij as IDE for development.

5. install Nodejs, nodejs will set the environment path automatically.

6. builds.bat(can find in other teammate) in D:\vincent\dev\frontend\workspace.intellij need to be re-configuration with your path

7. replace the frontend-etc/src/main/maven/config/setting/vincent/settings.xml to C:\apache-maven-3.2.5\conf\settings.xml which maven need to build the property in the project.

   1. ```xml
      <profile>
      
      <id>dev</id>
      
      <activation>
      
      <activeByDefault>true</activeByDefault>
      
      </activation>
      
      <properties>
      
      <dev.subdomain>it-vincentc</dev.subdomain> (your name)
      
      <dev.email>vincent.chan@yesstyle.com</dev.email> (your email)
      
      <dev.ipAddress>192.168.123.176</dev.ipAddress> (your computer ip address, check with command ipconfig)
      
      <dev.localMemcachedConfig>classpath:angelfishContext-memcached-local.properties</dev.localMemcachedConfig>
      
      <dev.databse.userName>vincentchan_v5</dev.databse.userName>
      
      <dev.databse.password>a1i2s3a</dev.databse.password>
      
      <dev.databse.schemaNames>VINCENTCHAN_V5</dev.databse.schemaNames>(same with username, since the schema is about user)
      
      </properties>
      
      </profile>
      
      
      
      and below element in the servers element, for download jar from nexus
      
      
      <server>
      
      <id>frontend-maven-site</id>
      
      <username>frontend</username>
      
      <password>Xyfrontend205</password>
      
      </server>
      ```

      

8. import the project from SVN(URL:http://svn.yawin.yesasia.com:1888/svn/v5) -> new link(http://svn.yawin.yesasia.com:1888/svn/v5/frontend-proj/trunk), the project need to deep into trunk folder (using git can skip step 8).

   1.  VCS > checkout from version control > subversion (now using the git, we can checkout all repo and add them using Maven)
   2.  like I want to import Kafka project, we follow the 9, will go into the checkout from subversion Menu and Expand kafka project -> select trunk -> click ok will import the kafka into the project.
   3.  after click ok there is local path we need to specify to store the source code from SVN.
   4.  after select the local path, there is another windows popup to select the destination, we select the path not including the trunk but including project name.like \workspace.intellij\kafka not \workspace.intellij\kafka\trunk
   5.  select 1.7 format. (for 2022 intellij select 1.8 format)
   6.  do not open this project, just click cancel in the popup dialog.
   7.  *.iml file is intellij setting file no need to add to VCS.

9. using maven project to import the project cloned by step 8.

   1. view > tool windows > maven projects
   2.  press + to add maven projects to same workspace
   3.  select project pom.xml(e.g. parent, rainbowfish ,kafka)
   4.  if you want to remove the project you can right click the root module and click unlink maven project.
   5.  if want to reimport all maven project 
      1. ​	Open the "Maven Projects" tab/window and clicking the "Reload All Maven Projects" in the upper left corner starts to reload all dependencies from their repositories.

10. 10.instal the memcached server:

    1.  right click memcached.exe > properties > Compatibility > check 'Run this program as an administrator'
    2.  install as windows service as: `memcached -d install`
       1. if at windows 7, 8, it may fail because of access right,
       2. then ask system to login as local admin to run the above
       3. command again

11. using the domain to access the local PC:

    1.  click search icon and type about your PC.
    2.  and the full device name will be the domain to access local.

    

ps.1

for step 4 and 5 we can use the TortoiseSVN to finish.

1.check out all the project we need

2.add it to the intellij using maven like step 5 above.



ps.2

since the new repository does not include the trunk for every project, so we just need to clone it like

http://svn.yawin.yesasia.com:1888/svn/v5/frontend-proj/trunk/angelfish

not in the trunk

http://svn.yawin.yesasia.com:1888/svn/v5/angelfish/trunk



ps.3

after switching to use the GIT,

we can checkout the all project within frontend-proj and follow the step 5 to import project as maven project.

https://dev.azure.com/yesstyle/frontend/_git/frontend-proj

check out the codebase:https://dev.azure.com/yesstyle/frontend/_git/frontend-proj (now using the git)

1. go to https://dev.azure.com/yesstyle/_git/yesstyle-app
2. click Repos in left panel
3. click clone
4. click Generate Git Credentials



ps.4

```
If you want to place a local order, you need to comment out the "spring config checkout.web.orderplacing.placeOrderSupport" in the file located at

frontend-proj\checkout\checkout-mobileweb\src\main\resources\devonly\checkoutContext-mobileWeb-application-overrideForDev.xml.

frontend-proj\checkout\checkout-war\src\main\resources\devonly\checkoutContext-application-overrideForDev.xml

frontend-proj\v3-yesstyle\yesstyle-war\src\main\resources\devonly\ysContext-application-overrideForDev.xml
```





### Build and run server

1. builds command run in -> D:\vincent\dev\frontend\workspace.intellij> builds.bat (builds.bat can be edit to change the which DB to use, like -Pstaging using staging)

2. to install war project -> D:\vincent\dev\frontend\workspace.intellij\v3-yesstyle>call mvn clean install -Dmaven.test.skip=true -Dmaven.test.skip.exec=true
   with -X parameter can set the log to be debug level.

3. to run the jetty server -> D:\vincent\dev\frontend\workspace.intellij\v3-yesstyle\yesstyle-war>mvn jetty:run

```
ps: can be ran in intellij with debug mode.to run the jetty server -> D:\vincent\dev\frontend\workspace

The easiest way is to:

Expand your project in the Maven Projects tab in IntelliJ. if can not found, click View > Tool Windows > Maven Projects

Expand Plugins > jetty items in which module you want to run, in this case, is YesStyle-war

Right-click jetty:run.

Choose Debug from the context menu.

coammand line:

"C:\Program Files\Java\jdk1.8.0_151\bin\java" -agentlib:jdwp=transport=dt_socket,address=127.0.0.1:51247,suspend=y,server=n

-Dmaven.home=C:\apache-maven-3.2.5 -Dclassworlds.conf=C:\apache-maven-3.2.5\bin\m2.conf

-javaagent:D:\vincent\Intellij\plugins\Groovy\lib\agent\gragent.jar

-javaagent:D:\vincent\Intellij\lib\rt\debugger-agent.jar=C:\Users\vincent.chan\AppData\Local\Temp\capture886.props -Dfile.encoding=UTF-8

-classpath C:\apache-maven-3.2.5\boot\plexus-classworlds-2.5.2.jar;D:\vincent\Intellij\lib\idea_rt.jar org.codehaus.classworlds.Launcher

-Didea.version=2017.3.1 jetty:run
```

4. if the intellij can not run as the ram in VM does not enough.

   1. add vm option in the run/debug configuration found in left of the run button

   2. -Xmx2048m and -Xms1024m

builds.bat can be used to set which DB current usage.

-Pstaging is using staging property.



### Build Pattern

    step1 -> builds.bat only build all module except the v3-yesstyle.war module
    
    step2 -> only build the frontend module after step 1



    builds all module is needed other than war module was changed. like Domain, Dao, Service layer
    
    only build v3-YesStyle if the code change in war or app-rest module
    
    run in IntelliJ will also build the module which is the war module.





### Abw local

#### can not load css js issue

if we access with ip address like 127.0.0.1, the css and js can not be loaded.

if we access using domain, the certificate issue occur, see below.

change the localDevelopmentApacheResourceUrlPrefix.abw=http://${dev.subdomain}.yawin.yesasia.com:38889/ 

in frontend/frontend-core/src/main/resources/frontendContext-service.properties





### Certificate Issue




#### Firefox

Go to about:config

Look for network.stricttransportsecurity.preloadlist and set it to false

Enjoy

If the above STILL DOES NOT WORK, try setting browser.fixup.fallback-to-https to false from about:config



Using Firefox 100 or above you may also need:



dom.security.https_first to false

dom.security.https_first_pbm to false (this one is for anonymous windows)



#### Chrome

type [thisisunsafe] in the Dom area





## Memcached

memcached likes redis

the services can be restarted in service.msc when the cache  is not cleared or should be updated but not updated.



### Clear Cache

method1:

1. go to service.msc you can restart the memcached

2. if there is no admin right for your computer using putty to telnet 127.0.0.1 11211 and type flush_all



method2:

1. using telnet
  1. telnet
  2. set localecho
  3. open <host ip> <port>

2. It actually isn't hanging; it's just that, for some reason, it doesn't give any feedback to show that it's connected.

3. just type the command like stats items or flush_all



method3:

​	using putty with telnet protocol to connect it.



for UAT

​	telnet fe-general-memcached.slenhz.0001.ape1.cache.amazonaws.com 11211

​	flush_all







## Nextjs

1. clone the nextjs repositories

2. change the .env.development flie FE_PRIVATE_API_END_POINT to local

3. how to run the debugger 

   1. run and debug in left panel 
   2. next.js debug full stack
   3. The new version of Chrome will have a pop-up feature that allows for debugging on both the server and client sides.

4. the debug script in launch.json in .vscode folder

   1. ```json
      {
      
        "version": "0.2.0",
      
        "configurations": [
      
         {
      
          "name": "Next.js: debug server-side",
          
          "type": "node-terminal",
          
          "request": "launch",
          
          "command": "npm run dev"
      
         },
      
         {
      
          "name": "Next.js: debug client-side",
          
          "type": "pwa-chrome",
          
          "request": "launch",
          
          "url": "http://localhost:3000"
      
         },
      
         {
      
          "name": "Next.js: debug full stack",
          
          "type": "node-terminal",
          
          "request": "launch",
          
          "command": "npm run dev",
          
          "console": "integratedTerminal",
          
          "serverReadyAction": {
          
           "pattern": "started server on .+, url: (https?://.+)",
          
           "uriFormat": "%s",
          
           "action": "debugWithChrome"
          
          }
      
         }
      
        ]
      
       }
      ```

      

5. the script in package.json

   ```json
    "scripts": {
   
     "dev": "next dev",
   
     "demo": "next dev -p 15000",
   
     "build": "next build",
   
     "start": "next start",
   
     "lint": "next lint",
   
     "analyze": "ANALYZE=true next build"
   
    }
   ```

   







## SpringBoot

1. for spring boot the project we need
   1. frontend-cloud
   2. utility
2. how to use the debugger (2 ways)
   1. Springboot way
      1. open the FrontendCloudServiceApplication
      2. right click the run button and select the debug.
      3. if any error
         1. open File | Project Structure | cloud-service
         2. search keyword "tomcat"
         3. change from provided to compile

   2. Maven way
      1. Maven Panel( click View > Tool Windows > Maven Projects ) | 
      frontend-cloud | cloudservice | plugin | spring-boot
      2. right click the spring-boot:run
      3. if the breakpoint does not have any response
         1. edit the configurations (in Run/Debug Configurations windows) for that run
         2. in run section change it `spring-boot:run -Dspring-boot.run.fork=false -f pom.xml` 
      		



## Build Issues

1. salve-maven2:0.9:instrument (default) @ yesstyle-app-rest ---java.lang.ArrayIndexOutOfBoundsException: 26721

   ```
   Execution default of goal salve:salve-maven2:0.9:instrument failed: Could not instrument com.yesasia.yesstyle.app.wicket.rest.resource.checkout.AppCheckoutSocialLoginRestResource
   
   -> wiped my ~/.m2/ folder and then re-ran and Maven re-downloaded everything
   
   -> using -e being the parameter in maven command to see the detail error if remove everything is not working.
   
   -> https://groups.google.com/g/salve-disc/c/LHDhskwnckY
   
   -> for my case, getMyAccountService().mapRegistrationType in AppCheckoutSocialLoginRestResource throws error.
   ```

2. Failed to execute goal on project frontend-backend: Could not resolve dependencies for project

   ```
   com.yesasia.frontend:frontend-backend:jar:2.2-SNAPSHOT: Could not find artifact com.yesasia.frontend:frontend-core:jar:tests:2.2-SNAPSHOT
   
   in public-snapshots (http://10.1.4.205:8082/nexus/content/groups/public-snapshots)
   
   -> remove the lastUpdated in .m2 folder and build again.
   ```



3. maven:

​	salve.depend.Dependency Instrumentor maven -> can not use lamda




# App set up ENV

## Mobile APP Link

```
http://wiki/wiki/index.php/Frontend:Projects:2018:YS_Mobile_App_Revamp:Tasks:Environment_Setup#Steps.282020.3.1.29
```
`http://wiki/wiki/index.php/Frontend:YSV3:Mobile_App_%28by_Google_FLutter%29`

`refer to https://flutter.io/`






## Step for setting ENV

### Terms

In Android Studio, the "SDK Platforms" and "SDK Tools" are components of the Android SDK (Software Development Kit) that allow you to develop Android applications.



"SDK Platforms" are the different versions of the Android operating system, such as Android 6.0 (Marshmallow), Android 7.0 (Nougat), etc.

You need to download the SDK Platform for the version of Android that you want to target with your app.



"SDK Tools" are a set of tools that are required for developing Android applications, such as the Android Emulator, Android Debug Bridge (adb),

the Android Asset Packaging Tool (aapt), etc. SDK Tools also include the Android SDK Build-Tools, which are required to build your app.





### Installation

- Android Studio: download

- Android Studio setting jar: download

- flutter windows zip: download

- SVN windows zip: download

- git for using flutter




### Set up

1. install flutter SDK

	1. unzip flutter windows zip to D: drive(i.e. D:\flutter)

	2. update environment variable path by adding D:\flutter\bin



2. install android studio

	1. check uninstall the previous version

	2. after installation, start Android studio

	3. import the Android Studio setting jar

	4. Configure > Import Settings , then select the jar

	5. restart Android studio

    6. also need to download the android sdk command-line tools in android studio sdk-tool.



3. install flutter and dart Plugins

	1. Configure > Plugins

	2. enter keyword 'Flutter' and search in repositories

	3. Update/install it(with Dart, yes)

	4. restart Android studio



4. check out the codebase: https://yesstyle@dev.azure.com/yesstyle/yesstyle-app/_git/yesstyle-app (now using the git)
   1. go to https://dev.azure.com/yesstyle/_git/yesstyle-app
   2. click Repos in left panel
   3. click clone
   4. click Generate Git Credentials




5. open the pubspec.YAML and click the Pub get (not the upgrade, upgrade will upgrade whole dependencies for the projects)



6. set up system setting SDK and project setting SDK to resolve the unable to locate the ADB



7. run [flutter doctor] to check the all environment is ready or not.

	1. if there has no admin right would be throw the UnsupportedClassVersionError, since our ENV set JAVA_HOME as java 8, but flutter request java11

	2. so we need to go to file | setteing | Tools | Terminal | Environment varibales | set the java_home to java11



8. upgrade flutter:

	1. change the pubspec.yaml

	2. download the upgrade version and unzip it change the environment in android studio and env path for Windows

	3. change the flutter SDK setting in android studio too
	
	4. using [flutter upgrade] for MAC, but windows still ok.



### Set Up Issue

1. unable to locate ADB -> set up system setting SDK and project setting SDK to resolve the unable to locate the ADB
2. was cached in the local repository, the resolution will not be reattempted until the update interval of public-snapshots has elapsed or updates are forced -> download that jar in local.
3. You need Java 11 or higher to build your app with this version of Gradle.
   - Add the command below in gradle.properties file: org.gradle.java.home=C:\Program Files\\Java\\jdk-18.0.1.1.
4. Flutter Doctor --android-licenses : Exception in thread "main" java.lang.NoClassDefFoundError &  not working due to java.lang.UnsupportedClassVersionError
	1. Open Android Studio
	2. Tools > SDK Manager
	3. From the left choose, Appearance & Behavior > System Settings > Android SDK
	4. Select SDK Tools from the top menu
	5. Check Android SDK Command-line tools and click 'apply'.
	
	


Open flutter project as andorid:

1. Unresolved reference: FlutterActivity
   - File -> Open , Then browse to your current project and select its "android" folder and open it









## Emulator

### VScode

1. download plugin ->
	1. dart,
	2. flutter,
	3. Flutter Widget Snippets
2. file -> open folder -> select the flutter project
3. open the pubspec.yaml and execute the [pub get] command to download and resolve the reference
4. download the bluestack emulator and enable ADB on the advance setting page.
5. command -> [HD-Adb.exe connect 127.0.0.1:port] in bluestack floder to let Adb to connect this device.
6. select bluestack device in the right-down bottom in vscode
7. command -> [flutter run] in vscode terminal to run the application in bluestack.
8. press
    - r hot load.
    - d Detach (terminate "flutter run" but leave application running).
    - c Clear the screen, s Save a screenshot to flutter.png.
    - o Simulate different operating systems(like IOS).
    - p Toggle the display of construction lines.
    - P Toggle performance overlay.
    - i Toggle widget inspector



### Android Studio

1.click the AVD manger located on right top conner

2.click create virtual device

3.select the device you want to create.

4.run that device





### With Out Admin Right:

0. to check hyper-v C:\Users\vincent.chan>systeminfo

1. emulator in android studio will require to use HXAM, but system team does not install it with permission.

2. using windoes feature to turn on the Hyper-V

3. C:\Users\vrqq\AppData\Local\Android\Sdk\emulator\emulator.exe -avd mydev -accel auto







## Flutter Tips

### Flutter

flutter library URL:https://pub.dev/

all these library is added to pubspec.yaml file



### Android

1.using [flutter build apk] to create the build for emulator

2.install it to the emulator



### IOS

1. build flutter via an android studio in MAC (using the command line: flutter build ios)
2. after building in android studio, Xcode should use these build files to build a real ios package.
3. set the version on the runner and pod folder.
4. there are two options to install the app to an IOS device
	1 using product->archive in Xcode to build the app, this option can also distribute to the App store which means publishing the App.
	in Organizar tab can distribute the app to the apple store test fight.
	2 press the run button in Xcode install the app to the IOS device directly.
	p.s if the build failed, please check the runner and pod folder to ensure the framework was set on it.



### For UAT ENV

there is no port.

static const String _SERVER_URL = 'https://uat.yesstyle.com/';







## Build & Delivery Check List

company MAC password:

Xyfrontend205



build:

Google Flutter:

lib/service/DataService.dart

_SERVER_URL

For UAT only, @AndroidManifest.xml,

add android:usesCleartextTraffic="true"

For UAT only, @GoogleService-Info.plist / TBC ?

use the production setting



Android:

update file

@AndroidManifest.xml, android:versionCode="XX", android:versionName="X.X.X"

@Build.gradle, versionCode XX, versionName "X.X.X"

build step for UAT

flutter build apk

apk found under "branch_4.1.9\build\app\outputs\apk\release"

build step for PROD

google requires to support both 32-bit and 64-bit

flutter build appbundle

flutter build apk --split-per-abi



p.s the version file:

D:\vincent\AndroidStudioProjects\ystrunk\android\app\build.gradle

and in D:\vincent\AndroidStudioProjects\ystrunk\android\local.properties



iOS:

update file

@Info.plist, CFBundleShortVersionString, CFBundleVersion

build step for UAT

open "Shared workspace setting, Build System to "Legacy Build System"

edit the project scheme to the profile "Release"

../flutter/bin/flutter build ios (MUST NOT OPEN XCode)

build step for PROD

after release, upload dSYMs

in /Users/frontend/trunk/ios/Pods/Fabric ,

./upload-symbols -gsp ../../../ios/Runner/conf/Release/GoogleService-Info.plist -p ios /Users/frontend/Documents/4.2.9_crashlytics/dSYMs.zip



delivery:

Flutter:

1. check the version name and version code in gradle.build and pudspec.yaml.

IOS:

1.IOS app uploaded.

2.testflight tested.

3.metadata upadated.

4.release criteria confirmed.

5.app build selected.

6.submit to review.

Andriod:

1.APK build upload to google play console

2.version checked.

3.release copy from a previous release.

4.100% Roll-out percentage filled up.







## Build and Delivery

before submition we need to confirm every task has been included in to build in wrike.

ask teammates to confirm code change has been included in the master or not.





### Build

IOS:

1. using remote vnc to connect to the company MAC for creating the new IOS build.
	1. open the MAC's android studio and update(version control) the flutter YesStyle project, [init the version in pubspec.yaml and build.gradle(android)].
	2. change icon if need. path -> D:\vincent\AndroidStudioProjects\ystrunk\ios\Runner\Assets.xcassets\AppIcon.appiconset
	3. run the command line after project updated. -> ../flutter/bin/flutter build ios (MUST NOT OPEN XCode)
	4. after flutter build successful go to Xcode. if the xcode window is not folder page click the left top conner to switch floder page.
	5. select the runner and pods to check framework and library
	6. edit the version and the sub-version in runner and notificationservice to ensure the version is updated.
	7. confirm the framework is included in runner and pods(since each build ios will clear the framework configuration in pod).
	8. using Xcode -> product -> archive to create a build for the current version.
	9. using xcode window -> Organizar -> distribute the app.
		1. select destination as apple store connect
		2. check the cert and version before upload
		3. the manage version checkbox can be not ticked. (no need)
		4. press upload
2. before uploading the build double confirm the app version and notification version.
3. restart the MAC if the password is needed in uploading app to testflight.
4. there will show the app in testflight in appstoreconnect after half an hour of uploading successfully.
5. go to delivery build section to eidt the description for each language of this release version,can copy previous one if there is no change.



### Issue

1. build failure -> check the framework/lib is included in runner and pods or not.
	1. there is 3 framework is needed.
	2.  OracleCXInfinity.xcframework
	3.  OracleCXMobileSDK.xcframework
	4.  OracleCXResponsys.xcframework
	5.  after chris refactor the plugin becomes the part of our native code, we do not need these three plugin anymore. just set [do not embed].
2. upload failure -> check the framework is set correctly.
	1. runner -> general -> targers -> runner -> set all these framework is embeded and sign
	2. runner -> Build Phases -> targers -> runner -> set the OracleCXResponsys.xcframework is Optional other is required
	3. Pods -> General -> yesstyleplugin -> set all these framework as Do Not embed
	4. Pods -> Build Phases -> yesstyleplugin -> set all framework is required
3. cocoapods specs repository is too out of date:
	1. run the pod repo update
	2. run the sudo gem install cocoapods.
	
	


### Export as IPA

https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/how-to-create-ipa-file-using-xcode-84e25cbb107f

https://stackoverflow.com/questions/5499125/how-to-create-ipa-file-using-xcode



### Transfer file to my computer from MAC

1. Open up a Finder window
2. Click Go [in the Menu Bar in the top left of your screen] > Connect to Server
	1. The shortcut for this is Command+K.
3. Type in the prefix smb://, followed by the ip address or hostname of the Windows machine.
	1. For example: smb://192.168.1.102 or smb://MyPC
	2. For my case is smb://it-vincentc.yawin.yesasia.com



Android:

1. make sure the code is updated in android studio.
	1. click the Fetch All Remote button in the bottom letf corner.
	2. check out the master branch
	3.  right click master branch and click update
2. update the version.
	1.version tag in pubspec.yaml file like (version: 4.4.57+353).
	2.flutterVersionCode and flutterVersionName in build.gradle file.
	3.for in case the local.properties may also need to update version.
3. check link in DataService.dart for ensuring in using production URL.
4. build the app
	1. run the flutter clean first.
	2. using command -> flutter build appbundle in ystrunk folder
	3. using coammand -> flutter build apk --split-per-abi after build, this command is splitting v7 and v8 instruction set.
5. after built the build\app\outputs\bundle\release\ will display on terminal, and get it in that floder.
6. using this build to install in device and test common flow (login,register,checkout,add to cart,add to wishlist, etc...)
7. login on google play console for publishing the app
	1. in dashboard tag select the app you want to publish
	2. enter into that app page select the production tab
	3. right top corner click the create new release
	4. upload the v7 and v8 version build to it
	5. double check the version
	6. edit or update the version description
8. select the products tag to edit the information if need
	1. description for each language
	2. screenshot for each language



### Revert Version

if there has other commit not belong to current release version:
1. select that commit and right click revert it.
2. after revert there is a changelist created for that revert.
3. if want to restore can right click the changelist and click revert it.



### Branch tag

after the version is confirmed and submit the ios and play store, there is needed to backup this branch.

1. in android, selcet SVN -> Browse  VCS repository
2. expand the v2-yesstyle -> ystrunk -> right click and select [Branch or tag]
3. taget name is branch and add commit message.
4. click the copy.





Delivery:

IOS:

1. check the wrike to find the new requirement for editing the description or keyword or else.

2. step 1 wrike may have a link to direct to Bugzilla which contains the screenshot, the screen preview needs 5.5 and 6.5 sizes.

3. login to apple store connect to prepare a new build, click the app to relase.

3.1 manage the testflight to review in testflight section in appstoreconnect

3.2 before progroess review we need to ensure app status being missing compliance to ready to submit in testflight for this version.

3.3 click the manage click yes after select yes.

3.4 the second page also check the yes and click start internal testing.

4. create the new build

4.1 click the + sign button to create a new release in the iOS App section, name it the same as the build version.

4.2 edit description and keyword and upload screenshot for each language and 5.5 6.5 screen size. (optional)

4.2.1 open two tab and copy each Promotional text and What's new in new relase.

4.2.2 total 8 language.

4.3 select the build to release in Build section of release page.

4.4 click add for review.

4.5 click submit to app review.

4.6 after submit you can see waiting for review for this version in left panel.

5.after review successful,there is  there is a few places need to pay attention

5.1 copy the pervious one if no change request in Promotional Text, since the Promotional Text can be null in new version release.

5.2 copy the pervious one if no change request in What's New in This Version, since the What's New in This Version can be null in new version release.

5.3 update the version in sbumit page.

5.4 In build section check the build verison and build code.

5.5* Version Relase must be [Manually release this version]

5.6* Phased Release for Automatic Updates must be [Release update to all users immediately]

5.7* Reset iOS Summary Rating must be [Keep existing rating]

p.s.

for submitting new build code version not entire version we need to cancel the this release in appstoreconnect

if the old relase has been in pendding stage.



issue:

Missing Compliance:

after Nov, apple require to upload the encryption document -> solution : set ITSAppUsesNonExemptEncryption as false/NO  in plist.info

https://www.cocoanetics.com/2017/02/itunes-connect-encryption-info/



testflight:

can add the user to testflight to test.



Android:

1. go to the google play console

2. in the All apps tag select the app want to publish

3. production tag in the left panel of the dashboard page after step 2 finish

4. click the create release/edit release button right top conner of the prodcution page

5. drop the app bundles in App bundles section
   1.  two bundles need to be included, v7a and v8a
   2.  check the version, like 1212(4.4.20) to v7a and 2212(4.4.20) to v8a, first letter 1 or 2 represent the v7a or v8a


6. in release detail, relase name and realse notes need to pay attention.
   1.  click the copy from a previous relase if there no need change
   2.  in the Previous release will show the previous version which is not included into this release.


7. click the review release
   1. in the Changes to your supported devices should pay attention, the devices no longer supported should be 0
   2.  in the Staged roll-out, the Roll-out percentage need to set 100% otherwise only 1% user can update will affect next day force update.


8. click the start-roll-out to production to release on play store.

9. if the managed publishing is turn on in the Publishing overview page, we need to do one more step.
   1.  after the all first 8 steps finished, there will be a section called the review part in the Publishing overview page,
   2. after the reviewed by google, the publish changes button will be displayed in the Publishing overview page,
   3. click it will roll-out the app to google play store.




force upgrade:

change the AbstractFrontendAppRestResource in server side, and commit it.

soft upgrade:

still need to chagne the AbstractFrontendAppRestResource, add the version that force upgrade does not contain.





update metedata:

description:

```
https://docs.google.com/spreadsheets/d/1RN9D69ZuMdboCgL_AF0pXCkNzDc3-Lcz/edit?pli=1#gid=872592483
```
update the red one.

screenshot:

find the screenshot in NAS. like \\HK-NAS05\ys_creative\app_screenshot\102297_App_Store_Winter_2022-23

google ->

go to play store -> 1. store perfence -> Main store listing in left panel

-> 2. App Icon -> using 512 * 512 icon and upload to it

-> 3. upload screenshot for 8 languages with sequence in Graphics section.

ios ->

go to apple connect -> 1. click + button to create 4.4.23

-> 2. and repalce all screenshot for each language with sequence.





icon:

find the icon in NAS. like \\DS-FELICITYI\Share\2022\ys\others\102297 - App Store Fall Winter Screenshots\app icon\04_black_friday_version\done

the icon should contain iOS and Android, if no ask for

search log history [app icons update] in svn for reference



add language:

ios ->

1.go to apple connection website.

2.select your app.

3.select the App information in left panel

4.select the language you want to add in the right top dropdown list.

5.fill up the inforamtion in the Localizable Information section.

6.click save button to save the setting.

7.there will be a new language added in language dropdown list in the new release.



google ->

1.go to the google play console

2.select your app

3.selcet the main store listing in the left panel after unfold the store prepareSecondLevelDepartmentConfig

4.click the mange translation and select mange your own translation

5.add the language you want in the language dialog.

6.fill up the meta data in the App details.

7.the App icon and Feature graphic and Phone screenshots will used default if does not change it.

8.save it the language will show in google play store later.





policy update for review app:

google:

Missing Data safety form:

1.go to the google paly console and select the app you want to add the data form.

2.select the App content in the left panel.

3.click the start in the data safety section.

4.there will have some options you need to choose and fill up.



UAT build delivery and install:

IOS:

1. go to apple connect store. -> https://appstoreconnect.apple.com/apps/868675907/testflight/ios

2. in testFlist you can submit your UAT build.

3. add user can be done in External Testing section in left pannel of the TestFlight.

3.1 https://appstoreconnect.apple.com/apps/868675907/testflight/groups/131959f2-de1a-485e-946e-51309b2ef4d7

[External Testing -> UAT -> add email you want he test]

3.2 clicks the + button in the Testers

3.3 select add new Testers.

3.4 input new tester email and name.

3.5 after add user to UAT group, can click the + button on the relase to add UAT group for this relase.

3.6 the user in this group can receive the new app in the testflight

4. using testflight app to test UAT.

4.1 download testflight in the app store.

4.2 click the invitation email will get the verified code.

4.3 using this code to get latest UAT app.

Android:

1. go to the App distribution in fireabse -> https://console.firebase.google.com/u/1/project/com-yesstyle-android/appdistribution/app/android:com.yesstyle.android/releases

2. in app distribution page, drag and drop the v7 v8 APK upload.

3. add the tester in the Testers tab of each relase,and invit the tester to test.

3.1 Testers and Groups tab can add new tester if can not find it in the release tab.

3.2 back to release tab and select the Testers tab in the release, and click Add Testers or Group

3.3 select the tester you want to add.

3.4 there is a invitation email sent after the tester added.

4. install app using app tester

4.1 after the invitation email sent to tester.

4.2 tester can get into this link and download the app tester.

4.3 in the app tester you can find latest UAT app need to test.







## APK Problem

background:

1. I have installed the APK with the 4.4.30 version built by flutter.
2. I want to install it back to 4.4.29
3. I uninstall the 4.4.30 app.
4. I install the 4.4.29 package, and it will throw the error package appears to be invalid.
5. I try to use ADB to install it, but the error will change to  INSTALL_FAILED_VERSION_DOWNGRADE: Package Verification Result
6. no idea why the app built by flutter will cause this issue, even if I uninstall the app fully.
7. the solution is using
	1. adb install -r -d [path_to_debug_apk] to replace and downgrade the app.
	2. OR adb uninstall com.yesstyle.android



ps.

get all package

1. adb shell cmd package list packages
2. adb shell pm list packages com.yesstyle.android

get install package

1. adb shell dumpsys package com.yesstyle.android
2. adb shell dumpsys package com.yesstyle.android | findstr version



adb dynamic link:
adb shell am start -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d "https://click.ysi.bz/SmartAppBanner?sabbru=aHR0cHM6Ly93d3cueWVzc3R5bGUuY29tL2VuL3lha28tZ2luZ2hhbS1taW5pLXNraXJ0L2luZm8uaHRtbC9waWQuMTA2NzAzNjUxMD91dG1fbWVkaXVtPXRlc3RtJnV0bV9zb3VyY2U9dGVzdHMmdXRtX2NhbXBhaWduPXRlc3RjJnV0bV9jb250ZW50PXRlc3Rjb24mdXRtX3Rlcm09dGVzdGs="






## iOS problem

cocoapods need to upgrade:

1. just rename the podfile.lock in the workplace | ios folder
2. run the flutter build ios

still problem on build:

1. update xcode
	- can not update xcode since the macOS outdated

1. check the storage before upgrade os version
2. if no space delete the archive build.
3. upgrade the os in the about this mac.
4. update the xcode.

select a development team in the project editor:
1. select the ys company account in the signing & capablitites for that plugin in the Pods.
2. run flutter build ios again.
the archive button dimed in XCODE

1. it is because we are using the simulator to build the app.
2. change it back to any ios device to resume it.






# Operation



## Repository link

web and server:

svn: http://svn.yawin.yesasia.com:1888/svn/v5

git: https://dev.azure.com/yesstyle/frontend/_git/frontend-proj



app:

svn: http://svn.yawin.yesasia.com:1888/svn/app/v2-yesstyle-app/ystrunk

git: https://dev.azure.com/yesstyle/_git/yesstyle-app



nextjs:

git: https://dev.azure.com/yesstyle/frontend/_git/nextjs



MAC book pro:

fe-deploy-guy : Xy1P0cK8







## Command

### Windows

- open folder in CMD:

  - explorer .

- check the port in Windows:

  - netstat -ano | findstr :<PORT>

- kill process:

  - taskkill /PID <PID> /F




### Linux

1. the find command
	1. `find . -name thisfile.txt`
		- If you need to know how to find a file in Linux called thisfile.txt, it will look for it in current and sub-directories.
	2. find /home -name *.jpg
		- Look for all .jpg files in the /home and directories below it.
	3. find . -type f -empty
		- Look for an empty file inside the current directory.
	4. find /home -user randomperson-mtime 6 -iname ".db"
        - Look for all .db files (ignoring text case) that have been changed in the preceding 6 days by a user called randomperson.

2. grep specified line for a file
    ```shell
    awk 'NR>=10 && NR<=60' filename
    or
    sed -n '10,60p' filename
    or
    (Get-Content filename | Select-Object -Index (9..59))```
    
3. grep log:
	`cat jewelfish-schedulejob.log.2022-09-25 | grep 'each pet'`

4. replace the string
    ```gsed -i 's/$VERSION_TO_BE_REPLACED/version: $VERSION_NAME+$VERSION_CODE/' pubspec.yaml```



### conemu:

set init path (two windows):

in the setting | startup | tasks | {Shells::cmd}

>cmd -cur_console:n /k dev

cmd -cur_console:s1THn /k -new_console:d:C:\Users\vincent.chan\AppData\Local\Android\Sdk\platform-tools







## GIT

git config --global core.autocrlf false -> avoid the change in windows and Linux.

git config --system core.longpaths true -> expand the path length of the file path.

local repositories -> http://admin@it-chrisn.yawin.yesasia.com/Bonobo.Git.Server/workspace.intellij.git



the password will be saved to Control Panel\User Accounts\Credential Manager

you can change edit it with your account.



login your account:

1. in the https://dev.azure.com/yesstyle/_git/yesstyle-app

2. select the Repos and click Clone

3. using generate Git credentials to generate the password.



### Command

1. git pull = fetch + merge/rebase

2. git branch -> see the branch

3. git branch -r -> see the remote server branch

4. git log -> check the log.

5. git add -> add the change to stage area(add index)

6. git commit -> commit the commit to local repository(local branch)

7. git push -> push the change to tracking branch of the remote repository.

8. pull request/megre request -> megre the change in local branch to remote branch.

9. git checkout = git restore + git switch

10. git restore is used to restore the file in stage and working area.

11. git switch is used to dip into another branch.

12. git reset is used to in the committed change, reset the current branch(label) to the commit you want.

13. git revert is commit another changes to cover the change you do not want to keep.

14. git tag mytag master -> give the master a tag named mytag

15. git push origin <tag_name> push the tag to remote repository [remember in the taged branch to do it]

16. git config user.email yournewemail@example.org -> change the account

git commit --amend --reset-author or git commit --amend --reset-author --no-edit -> commit it

17. reset the upstream link.

```shell
git remote -v

git remote remove origin

git add origin [URL]
```

18. count how many line you have modified:

git log --author="vincent" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "Added lines: %s, Removed lines: %s, Total lines: %s\n", add, subs, loc }'

19. with the period:
	1. `git log --author="vincent" --since="2023-01-01" --until="2023-05-05" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "Added lines: %s, Removed lines: %s, Total lines: %s\n", add, subs, loc }'`
	2. for listed member
    ```team=("vincent" "ray" "rey" "danny")
	
    for member in "${team[@]}"
	
    do
	
    echo "Stats for $member:"
	
    git log --author="$member" --since="2023-01-01" --until="2023-06-30" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "Added lines: %s, Removed lines: %s, Total lines: %s\n", add, subs, loc }'
	
    done
	```

20. delete all local branches that have been deleted on the remote repository
	1. git fetch --all --prune
	2. git branch -vv | grep 'origin/.*: gone]' | awk '{print $1}' | xargs -r git branch -d

21. find the start point of the feature branch with branch name
	`git merge-base <feature-branch> master`

22. find the start point of the feature branch that has been deleted with commit hash
	`git merge-base master <commit-hash>`

23. check the file who commit
	`git log -- <file>`
	`git log -- **/FeatureSwitchUtil.java`




### Flow

1. the git branch as a label, sticked on which commit, the branch will on this commit.

2. head is another type of label, which mean your current working space placed on.

3. each local branch should have corresponding remote branch after your local branch has been push.

4. when you do the fetch, all the remotes branchs in current repository will be fetched and placed on the remote folder in local.

5. the fetch will get the log, the log should be end with current branch lastest commit.
	1. like A branch behind B branch 3 commit, after fetch in A branch, the commit can only see A branch latest commit.(for tortoisegit)
	2.  after fetch all the branch history will be log and show (other than tortoisegit)

6. the merge is about sticking label to merged branch, like feature A merge into master branch, the master label will stick on feature branch A begin with the cross point of their label.

7. for IDE merge graphic
	1. the visual code only show one parent, like the commit in feature branch A  merges to master, will show the feature branch A commit.
	2. intellij is difference, there would be two parent branch commit combine to a commit, you can see change to hash code of commit A and hash code of commit B
	3. the intellij will show some folders outside the two parent commit, mean the file inside these folder have been modified by two parent branch.



## IDE

### IntelliJ

compare two branch and copy the code from compared branch:

1. open the git dock pined windows bottom of the intellij

2. right click the branch you want to compare

3. select the show difference with the work tree

4. all difference file will be shown , right click the file and copy your change if you want.

5. if the file or folder missing, right click it and click git from branch.



### Visual Code

compare two branch and copy the code from compared branch:

1. using gitLens plugin.

2. turn on the source control panel in the right panel

3. expand the gitlens: remotes tab, if not found please click three dod next to source control, and tick the remotes option.

4. right click the branch you want compare, select the compare with the working tree

5. in git len search and compare you can find the files change between two branchs.

6. select the file you want to compare, there will be the arrow icon next to code line, using it to copy block of code,(left is compared branch, right is yours)

7. if the file is missing for your branch but in the compared branch, you can right click the file and select restore.

this will checkout the file.







## Version Control

1. Version Control tab at the bottom in Intellij can check the local change.

2. Intellij new change list on right-click context menu would be useful when there are so many changes with different CR.
	1. the GIT should not use this, since we can create a feature branch for each CR.
	2. ps: just edit the changelist name, no need to fill up the changelist comment, otherwise the comment will overwrite the name after committing to SVN.

3. Shelve Change can allow you to stop working on a new feature to start working on an urgent matter.




## Datadog

1. https://app.datadoghq.com/

2. go to the log selected in the left pannel.

3. in the top right can select the date

4. in the search box can search with the key word.

account is yesstyle account.





## Bussiness Logic Flow

### Bussiness term

#### influencer

an influencer is a term that his/her channel like IG facebook has enough fans to attract ppl to buy products from the YS website.

change user to be influencer:

update elite_club_membership set tier_id=8 where ya_shopper_id = '2c9380827d36e1aa017d36e48ada0001';



#### JIT product

just in time product



#### Topic/Section

topic and section id is used to get the help content dialog.



#### BranchLink

webiste : https://branch.io/

can make our website link shorten and map to our website specify page.

used for deeplink



#### Modules description

##### abw:

asianbeautywholesale module is used to run the B2B platform.



##### YesAsia:

flyingfish module is used to run YesAsia.



##### YesStyle:

v3-yesstyle module is used to run YesStyle.







## Account

Yesstyle storefront account:

vincentchan@yopmail.com

12345678

vincent.chan@yesstyle.com

bbc123456

hkvincentchan@gmail.com

abc123456



dynamic1@y.com

11111111



dynamic2@y.com

1111111



admin account:

vcws@0719*



aws account:

UAT:

username:IT.FE.Vincent.Chan

PROD:

username:IT.FE.Vincent.Chan





## Coding standard

1. 80 lines per method.

2. readable and reusage.

3. every new class or new method should draw a doc on this.

4. every line of code can not be exceeded to 80 characters.

5. typo problem needs to pay attention to it.







## Copy folder

backgroup: File Paths Over 260 Characters when copy

https://www.howtogeek.com/266621/how-to-make-windows-10-accept-file-paths-over-260-characters/

after change the system config followed the above link, character over 260 is working only using other tools not window explorer

```
#rename the folder
```
ren D:\vincent\dev\frontend\workspace.intellij D:\vincent\dev\frontend\workspace.intellij_

```
#create the folder
```
mkdir D:\vincent\dev\frontend\workspace.intellij

```
#Copies subdirectories. This option automatically includes empty directories.
```
robocopy D:\vincent\dev\frontend\workspace.intellij_ D:\vincent\dev\frontend\workspace.intellij /E







## Deployment

### Server List:

http://wiki/wiki/index.php/Frontend:YSV3:Configuration



### SSH

#### PROD

wicket:

log location:

old -> /opt/ys.apache-tomcat-7.0.96/logs

new -> /opt/fe-wicket-ys/logs

Host name :

ec2-user@172.31.1.31

Port: 22

springboot:

log location:

/home/ec2-user/frontend.cloud.service/logs/frontend-cloud-service.log

Host name :

ec2-user@172.31.1.110 | ec2-user@172.31.2.110

Port: 22

nextjs:

log location:

/opt/nextjs/logs

Host name :

ec2-user@172.31.1.223 | ec2-user@172.31.2.93 |

Port: 22





#### UAT

wicket_old:

Host name:

10.1.4.205

Port:

22

Username & Password :

frontend & Xyfrontend205

war location:

/home/frontend/deploy/uat.ys

scripts location:

/etc/init.d/uat.ys.tomcat759

enable feature using server argument:

CATALINA_OPTS="$CATALINA_OPTS -DenableYsIndiaTax=true"

wicket_new:

log location:

/opt/ys.apache-tomcat-7.0.96/logs

Host name :

ec2-user@172.17.2.21

Port: 22

nextjs:

log location:

/opt/nextjs/logs/docker-nextys-a.log or docker-nextys-b.log

Host name :

ec2-user@172.17.2.21

Port: 22

springboot:

log location:

/home/ec2-user/frontend.cloud.service/logs/frontend-cloud-service.log

Host name :

ec2-user@172.17.2.101

Port: 22





p.s:

if you do not know the folder of the process, using the grep to find it `ps aux | grep java`





#### Schedule-job server:

172.31.42.10 Xyfrontend186 -> email job

172.31.41.20 Xyfrontend186 -> crmjob


1. go to the /etc/init.d -> jewelfish.schedulejob.oracleCrmJob ->this is a shell scripts ran on services. we can check the scripts content:

the script:
```
		JVM_OPTS="$JVM_OPTS -Duser.timezone=GMT"
				JVM_OPTS="$JVM_OPTS -Dcom.sun.management.jmxremote"
				JVM_OPTS="$JVM_OPTS -Dcom.sun.management.jmxremote.port=20001"
				JVM_OPTS="$JVM_OPTS -Dcom.sun.management.jmxremote.local.only=false"
				JVM_OPTS="$JVM_OPTS -Dcom.sun.management.jmxremote.authenticate=false"
				JVM_OPTS="$JVM_OPTS -Dcom.sun.management.jmxremote.ssl=false"

				#JVM_OPTS="$JVM_OPTS -Xms1024m -Xmx8192m -DfasterInitializeState=true"
				JVM_OPTS="$JVM_OPTS -Xms1024m -Xmx8192m -DisMassUpdate=false"

				TARGET_JAR="jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar"

				TARGET_PID="/var/run/jewelfish-schedulejob-oracleCrmJob.pid"

				# Source function library.
				. /etc/rc.d/init.d/functions

				# Source networking configuration.
				. /etc/sysconfig/network

				# Check that networking is up.
				[ ${NETWORKING} = "no" ] && exit 0

				# Set Tomcat environment.
				export JAVA_HOME=/opt/jdk1.8.0_151
				export TARGET_HOME=/opt/frontend-jewelfish/oraclecrmjob
				export PATH="$JAVA_HOME"/bin:$PATH

				[ -f "$TARGET_HOME"/"$TARGET_JAR" ] || exit 0

				export PATH=$PATH:/usr/bin:/usr/local/bin

				# See how we were called.
				case "$1" in
				start)
				# Start daemon.
				echo -n "Starting jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar: "
				cd $TARGET_HOME
				java $JVM_OPTS -jar $TARGET_JAR > out.log 2>&1 &
				echo $! > $TARGET_PID
				echo "..... with pid: `cat $TARGET_PID`"
				;;
				stop)
				# Stop daemons.
				echo "Shutting down jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar: "
				if [ -f "$TARGET_PID" ]; then
					echo "Killing: `cat $TARGET_PID`"
					kill -9 `cat $TARGET_PID`
					rm -f $TARGET_PID
				else
					echo "Kill failed: $TARGET_PID not present"
				fi
				;;
				restart)
				$0 stop
				$0 start
				;;
```


​	p.s. start) or stop) like we run the jewelfish.schedulejob.oracleCrmJob, start will run the start part in above scripts.



2. in the home/frontent/deploy folder we can find all the jewelfish jobs in this place.
in my case we want to find out the oralceCRMjob, enter into this folder we can see the jar with date and time being the file name.
since it si GMT so we need to add 8hour to convert to my area.


3. in the jewelfish.schedulejob.oracleCrmJob for this case, you can see the deploy.sh
the script:

    ```
    TIMESTAMP='date +_%Y-%m-%d_%H.%M.%S'

    SOURCE=http://10.1.4.186:7070/view/production/job/build-production-jewelfish-schedule-job/ws/jewelfish/jewelfish-schedulejob/target/jewelfish-schedulejob-2.2-SNAPSHOT.synchronizationJob.jar

    SOURCE=http://10.1.4.150:7070/job/build-production-jewelfish-schedule-job/ws/jewelfish/jewelfish-schedulejob/target/jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar

    SOURCE=http://10.1.4.205:9380/luntbuild-work/trunk-production-frontend-jewelfish/jewelfish/jewelfish-schedulejob/target/jewelfish-schedulejob-2.0-SNAPSHOT.one-jar.jar

    TARGET=/home/frontend/deploy/jewelfish.schedulejob.oracleCrmJob/jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar

    DEPLOY_HOME=/opt/frontend-jewelfish/oraclecrmjob

    wget $SOURCE -O $TARGET

    cp $TARGET $TARGET$TIMESTAMP

    cp $TARGET $DEPLOY_HOME/

    service jewelfish.schedulejob.oracleCrmJob stop

    service jewelfish.schedulejob.oracleCrmJob start
    ```

4. the jewelfish log is in -> /opt/frontend-jewelfish/oraclecrmjob

5. grep log example:
	`cat jewelfish-schedulejob.log.2022-09-25 | grep 'each pet'`



### Deploy

1. check the crm job is deployed or not:  ps -ef | grep schedule | grep Crm

2. cd deploy/jewelfish.schedulejob.oracleCrmJob/

3. sh deploy.sh

4. in the /home/ec2-user/deploy/jewelfish.schedulejob.oracleCrmJob, you can see the jar with timestamp that is last deploy time.

ask for deploy the scheduleJob | deploy YS and oracle CRM job



#### Jenkins Link

http://10.1.4.150:7070/ -> OLD

http://10.1.4.186:7070/ && http://172.17.2.10:8081/ -> UAT

https://frontend-jenkins.yawin.yesasia.com/ -> PROD

Mac jenkins : admin admin



#### Wicket(Monolithic)

since the UAT is set build and deployment togther so no need to click deploy.

UAT Cloud:

​	build-cloud -> build-staging-cloud-yesstyle-danny  -> click the run button logo to build and deploy the UAT,

UAT:

​	build-staging -> build-staging-yesstyle-v3 -> click the run button logo to build and deploy the UAT,



Prodcution:

build->

build-production -> build-production-yesstyle-devops

deploy->

deployment-prodcution -> deploy-production-cloud-ys-devops



since there has warmup EVN, so build action will not be same as other ENV including deployment also.



check log:

access ->

after right granted there is a run button on the right.

check build error ->

Jeknins -> CI -> CI-frontend -> svn-frontend - consonl



#### NextJS(Microservice):

UAT:

​	frontend:

​		build-staging -> deploy-staging-nextjs-asg

​	backend:

​		build-staging -> frontend-cloud-service-danny



Warmup:

​	frontend:

​		build-staging -> deploy-staging-nextjs-masterbranch-asg

​	Backend:

​		build-staging -> build-staging-frontend-cloud-service-master



Production:

​	frontend:

​		build-production -> deploy-production-nextjs-devops

​	backend:

​		build-production -> build-production-frontend-cloud-service-devops



p.s. before and after delpoy need to say on Team

p.s. deploy oracle crm job will also deploy the DAO and service, if you do not  need to update YS just deploy oracle crm





### Azure deploy pipeline:

1. using the azure to dpeloy now, jenkins is deprecated.

2. build link https://dev.azure.com/yesstyle/frontend/_build?definitionId=2 (for wicket), https://dev.azure.com/yesstyle/frontend/_build?definitionId=11(for springboot)
	1. Run the pipeline based on UAT branch and default profile, build type is YS-Wicket
	2. for cloud service,based on UAT branch and default profile, build type is the YS-API

3. there need deploy after the Built (for new version we can skip this step)
	1. https://dev.azure.com/yesstyle/frontend/_release?_a=releases&view=mine&definitionId=6
	2. Please choose the build version that was buildt from previous step
	3. and press create
	4. after that press,there is a new release in the panel, click it go to detail page and click deploy button

4. you can find the ip for that deployed server,
	1. due to auto scaling, some severs will be deleted, so Ip will be changed.
	2. go to Bash Script, will show the log.

5. find the log
    - there is two URL, one for UAT, one for PROD
    - UAT: https://yaysuat.signin.aws.amazon.com/console
    - Prod: https://yaysprodcloud.signin.aws.amazon.com/console
	1. ec2 ip address -> please check FE-asg-api from EC2 > Auto Scaling groups > instance management
	2. CloudWatch > Log groups > EC2-Log/ys-fe-api-spring-boot



### Tomcat Manager
	will use the tomcat manager to upload the war to it and deploy it.
	http://172.17.2.21:8080/manager/html
	frontend_co / co1031



### Jenkins sparse checkout

the spare checkout is used to checkout the sub-module in a repository.

"Sparse checkout" allows populating the working directory sparsely.

It uses the skip-worktree bit (see git-update-index[1]) to tell Git whether a file in the working directory is worth looking at.

If the skip-worktree bit is set, and the file is not present in the working tree, then its absence is ignored.

Git will avoid populating the contents of those files, which makes a sparse checkout helpful when working in a repository with many files,

but only a few are important to the current user.


The $GIT_DIR/info/sparse-checkout file is used to define the skip-worktree reference bitmap. When Git updates the working directory,

it updates the skip-worktree bits in the index based on this file.

The files matching the patterns in the file will appear in the working directory, and the rest will not.

in freestyle to find the advance button under source management




#### Command

Works in git 3.37.1

```shell
git clone --filter=blob:none --no-checkout --depth 1 --sparse <project-url>
cd <project>
Specify folders you want to clone

git sparse-checkout add <folder1> <folder2>

git checkout
```



#### Change the svn to git for jenkins

Add Creditential

http://HOST_URL/credentials/store/system/domain/_/newCredentials



Modify Jenkins SVN Jobs

Modify jobs with name equal to svn-xxx


Source Code Management

resposity url

https://yesstyle@dev.azure.com/yesstyle/frontend/_git/frontend-proj

credientials

choose (azure devops)



#### Build

modify Root POM

    to xxx/pom.xml, where xxx is the folder name
    
    be aware of the svn-yestyle-v3, the folder name is v3-yesstyle which is different from job name
    
    click 'Use custom workspace', set Directory to
    
    ${BUILD_DIR}



Modify build-staging-cloud-yesstyle-v3

    from: jar -xf ${WORKSPACE}/yesstyle/yesstyle-war/target/yesstyle-war-2.2-SNAPSHOT.war
    
    to: jar -xf ${WORKSPACE}/v3-yesstyle/yesstyle-war/target/yesstyle-war-2.2-SNAPSHOT.war



Modify deploy-staging-cloud-ys-new

    Artifacts to copy
    
    from: yesstyle/yesstyle-war/**/*.war
    
    to: v3-yesstyle/yesstyle-war/**/*.war



Modify build-staging-frontend-cloud-service

    Pipeline
    
    stage('Build Application')
    
    from: build job: 'svn-utility',
    
    to: build job: 'git-utility',
    
    stage('Build Application')
    
    from: build job: 'svn-frontend-cloud',
    
    to: build job: 'git-frontend-cloud',

Rename Job svn-xxx to git-xxx ???



issue:

1. will remove the jenkins home

as the script is passing the working_dir as parameter to sub job, if the working_dir is not working, will default to use the jenkins home directory,

but there has a command to run the rm -rf working_dir, so it is possible to remove the jenkins home folder



grep docker log and output to a file:

`docker logs --since 2023-02-01T08:01:46.452616Z jenkins >& logs_error.txt`







#### Check the jenkins using which revision

1. go to the jenkins job

2. click the job you want to check

3. click the console output in the left panel with the build number

4. in the console output there can find the job related to git and click it

5. click the Git Build Data in the left panel and copy the revision

6. go to intellij and locate the revision in the log

7. compare it with the logcal working copy, select the file you want to check.





## AWS

### EC2 instance

1. the  ec2 of UAT nextjs in the auto scaling group

2. to find the IP address of the ec2 instance : EC2 > Auto Scaling groups > FE-asg-nextjs-poc

3.the link is https://ap-east-1.console.aws.amazon.com/ec2/home?region=ap-east-1#AutoScalingGroupDetails:id=FE-asg-nextjs-poc;view=instanceManagement

4. click the instance id to find the IP address.



Check the log with CloudWatch

	CloudWatch | Logs | Log groups | EC2-Log/FE-YS | server

Checke the ASG pipeline

    EC2 | Auto Scaling Groups | FE-asg-wicket-ys | Instance management | click Launch template name | Advanced details



### How to set maximum for ASG

go to the ASG -> click the edit button -> find the maximum instance -> change it to the number you want -> click the save button



### How to monitor the usage of the instance:

1. go to the EC2 -> click the instance you want to monitor -> click the monitoring tab -> click the enable button

2. go to the CloudWatch -> click the metrics -> click the EC2 -> click the per-instance metrics -> click the instance id you want to monitor -> click the CPUUtilization

3. click the graphed metrics -> click the add to dashboard -> click the create widget

4. go to the dashboard -> click the dashboard you want to monitor -> click the edit button -> click the add widget -> click the add widget button







## Oracle Responsys CRM


1. https://interact.rsys9.net/suite/c#!folders
	1. select the folders in left panel
	2. select the master_data_qa in folder section

2. find the RIID and customerId
	1. in the dropdown list of the contents select all Types.
	2. select the MASTER_CONTACTS_LIST_QA
	3. click the find input the riid or customer id to retrieve the customer info

3. find the supplement data. for production  select the Couponcode_Allocation in folder section
	1. in the dropdown list of the contents select supplemental data.
	2.  select the table you want.

4.find the profile extensions. 
	1. in the dropdown list of the contents select pet data.
	2. select the table you want.

5. push message for DEV.
	1. select the Campaigns in left panel
	2. click the Manage Campaigns.
	3. click the B2_birthday_offer_AppPush_DE in the content view.
	4. click the launch in the right top corner

6. curl get request for pet table:

    ```shell
    curl -o output.txt -i -X GET \
    
    -H "Content-Type:application/json" \
    
    -H "Authorization:EFS7GsV-8rs4gzZ7tTTpwLWhkiyuhXqIC7osKootMPMCUCU5-Yr5yukPZuVMhVZEdnTV9g" \
    
    'https://yav1qv3-api.responsys.ocs.oraclecloud.com/rest/api/v1.3/lists/MASTER_CONTACTS_LIST/listExtensions/Dynamic_coupon_Cart_RC_USD_PET/members?qa=d&fs=all&sdate=09-28-2022&edate=09-28-2022'
    ```
    
    

​	



## Wrike Link

### Add item

```
https://www.wrike.com/workspace.htm?acc=2192533#path=folder&id=857969114&c=list&vid=74672172&a=2192533&so=5&bso=10&sd=1&f=&st=nt-1&sfi=1
```
if there is Bugzilla but not in wrike, you can click  the link above and add item and add your Bugzilla.



### Add ip to whitelist

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=96464



### Build list:

```
https://www.wrike.com/workspace.htm?acc=2192533#folder/951922113/list?filters=&sortOrder=5&spaceId=-1&viewId=103192258
```



### Dashboard

```
https://www.wrike.com/workspace.htm?acc=2192533#dashboards
```






## Certificate problem

as the company security upgrade, all cer has been deprecated

can not access any website in safe mode or regular mode.

In order to install the certificate on trusted roots:

- Click on the red alert icon on the top left of the address bar, from the drop-down menu select certificate.

- Then navigate to the detail tab on the certificate window, from the bottom right click on Export button, Export the certificate in DER encoding set the name of the certificate, and Finish.

- Then open certmgr.msc expand the Trusted Root Certificate Authorities tree.

- Right-click on Certificate from the drop-down select all task then click import select your certificate chose Place all certificates in the following store and proceed to finish.

- Relaunch Chrome.

the issue would happen on IDE too.







## SSL worker service

SecurityError: Failed to register a ServiceWorker: An SSL certificate error occurred when fetching the script.

using below command to run the chrome:

C:\Program Files\Google\Chrome\Application

chrome.exe --user-data-dir=C:\frontend-jewelfish --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://it-vincentc.yawin.yesasia.com/







## Language Design

expression: give the value

statement: do some actions







## Logs Path

1. jewelfish.war log:

​	@172-31-41-10 /opt/jewelfish.apache-tomcat-7.0.22/logs

2. oracleCrm job log:

​	@172-31-42-10 /opt/frontend-jewelfish/oraclecrmjob

3. frontend log:

​	@172.31.2.26 /opt/co.ys.apache-tomcat-7.0.96/logs







## WSL

1. access wsl folder:

	`\\wsl$`

2. find  WSL distros

	`wsl --list --all, or simply wsl -l --all.`

3. start a specific distro

	`wsl --distribution <DistributionName> or wsl -d <DistributionName>`

    Replace the <DistributionName> portion with the actual name of the installed distro you want to run

4. navigate to C drive in bash on WSL-Ubuntu

	`cd /mnt/c/wamp64/www`

    In Windows Subsystem for Linux (WSL) The C:\ drive is mounted as /mnt/c/, D:\ is mounted as /mnt/d/ et cetra

5. home directory on Windows Subsystem for Linux:
	1. `\\wsl$\Ubuntu`
	2. `%LOCALAPPDATA%\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs`
	3. `%LOCALAPPDATA%\Packages\`



## Auto Deploy

in this part is about environment setup, for the auto deploy,

the srcipt part can refer to fastlane part.

Fastlane:

1. get update the Linux [Ubuntu]
	`apt-get update`

2. install ruby
	`sudo apt-get install ruby-full`

3.install fastlane
	1. `gem install fastlane`
	2. Unable to install travis on WSL
	3. For Ubuntu 18.04 on WSL I also had to install ruby-dev
		```sudo apt install ruby ruby-dev make gcc
		sudo gem install travis```
	4. install extension error:
		https://ruby-china.org/topics/33742
		`apt-get install build-essential`

4.install jdk
	1. `sudo tar zxvf jdk-8u333-linux-x64.tar.gz`
	2. ```edit env, sudo vi /etc/profile ->	 export JAVA_HOME="/opt/java/jdk1.8.0_333"
	export PATH=$JAVA_HOME/bin:$PATH```
	3. source /etc/profile

5. install gradle (optional)
	1. instll package manager -> `curl -s "https://get.sdkman.io" | bash`
	2. refresh -> source "/home/vincent/.sdkman/bin/sdkman-init.sh"
	3. install gradle -> sdk install gradle 7.4.2
	4. run gradlew will remove java, copy java file and change right -> sudo chmod 755 /opt/java/jdk1.8.0_333/bin/java

5. install flutter sdk.
	1. git clone https://github.com/flutter/flutter.git -b 2.2.3
	2.  chage right -> sudo chown -R $USER /opt/flutter
	3.  set the flutter environment or export PATH="$PATH:`pwd`/flutter/bin"

6. install android sdk:
    ```
        wget https://dl.google.com/android/repository/commandlinetools-linux-6200805_latest.zip
            mkdir -p Android/Sdk
            unzip commandlinetools-linux-6200805_latest.zip -d Android/Sdk
    
            export ANDROID_HOME=$HOME/Android/Sdk
            # Make sure emulator path comes before tools. Had trouble on Ubuntu with emulator from /tools being loaded
            # instead of the one from /emulator
            export PATH="$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH"
    
            sdkmanager --sdk_root=${ANDROID_HOME} "tools"
    
            sdkmanager --update
            sdkmanager --list
            sdkmanager "build-tools;28.0.3" "platform-tools" "platforms;android-28" "tools"
            sdkmanager --licenses
    
            sudo apt install gradle
    ```

7.build the project with flutter:
	1. flutter build appbundle
	2. flutter build apk --split-per-abi
	3. error display -> flutter build apk  --release -vv
        - Noisy logging, including all shell commands executed.
        - If used with "--help", shows hidden options. If used with "flutter doctor", shows additional
        - diagnostic information. (Use "-vv" to force verbose logging in those cases.)


8. install brew:

- Run these two commands in your terminal to add Homebrew to your PATH:
    ```echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/vincent/.profile
    eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"```

- Install Homebrew's dependencies if you have sudo access:
	`sudo apt-get install build-essential`

    For more information, see:
    https://docs.brew.sh/Homebrew-on-Linux

- We recommend that you install GCC:
	brew install gcc

- Run brew help to get started
- Further documentation:
    https://docs.brew.sh
    https://medium.com/rocket-fuel/implementing-a-flutter-ci-cd-pipeline-in-jenkins-part-1-introduction-strategy-and-environment-d4c7ac8f93e1

9. install Cocoapods
	sudo gem install cocoapods //Installs Cocoapods

10.install jenkins:
	1. brew install jenkins-lts
	2. 
    ```
    To restart jenkins-lts after an upgrade:

    brew services restart jenkins-lts
    
    Or, if you don't want/need a background service you can just run:
    
    /home/linuxbrew/.linuxbrew/opt/openjdk@11/bin/java -Dmail.smtp.starttls.enable=true -jar /home/linuxbrew/.linuxbrew/opt/jenkins-lts/libexec/jenkins.war --httpListenAddress=127.0.0.1 --httpPort=8080
    
    ==> Summary
    
    🍺  /home/linuxbrew/.linuxbrew/Cellar/jenkins-lts/2.332.3: 8 files, 94.0MB
    
    ==> Running `brew cleanup jenkins-lts`...
    
    Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
    
    Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
    
    ==> Caveats
    
    ==> jenkins-lts
    
    Note: When using launchctl the port will be 8080.
    
    To restart jenkins-lts after an upgrade:
    
    brew services restart jenkins-lts
    
    Or, if you don't want/need a background service you can just run:
    
    /home/linuxbrew/.linuxbrew/opt/openjdk@11/bin/java -Dmail.smtp.starttls.enable=true -jar /home/linuxbrew/.linuxbrew/opt/jenkins-lts/libexec/jenkins.war --httpListenAddress=127.0.0.1 --httpPort=8080
    ```


11. setting for build flutter project:
	1. link tutorial:
    https://medium.com/rocket-fuel/implementing-a-flutter-ci-cd-pipeline-in-jenkins-part-4-jenkinsfile-android-and-ios-fastlane-d88d41cee355

    https://medium.com/globant/flutter-jenkins-getting-started-4d2e036567b

    https://medium.com/globant/flutter-jenkins-pipeline-to-build-test-and-upload-to-appcenter-e4ef59c7dbdd

	2. pipeline setting with generate script:\
    https://stackoverflow.com/questions/36881132/checkout-svn-with-credentials-in-jenkins-pipeline

	3. in progress to set the right in jenkins

	4. if want to replay the build with new change, you need to delete previous build record in jenkins.
	
	5. set service in MAC with brew for locale: brew services list,all the plist file will come. so you need to vi the file.


12. pipeline in jenkins:
	1. git with branch:
		git branch: 'develop', url: 'https://github.example.com/myorg/myproject.git
	2. set the environment path:
    ```shell
    pipeline {
    
    agent { label 'docker' }
    
    environment {
    
    PATH = "/hot/new/bin:${env.PATH}"
    
    }
    
    stages {
    
    stage ('build') {
    
    steps {
    
    echo "PATH is: ${env.PATH}"
    
    }
    
    }
    
    }
    
    }
    ```


13. project setting:

android:

	1. pubspec.yaml set the version number and build number like -> version: 4.4.46+288
	
	2. when running the flutter build will write the version number and build number to local.properties
	
	3. the app/build.gradle will read the local.properties file and set it for the android build.



tools:

Specify pipe output position -> `echo "myserver:${HOME}/dir/2/" | xargs -I {} rsync -r "{}" /local/path/`

get svn log -> `svn log -l 1 --username=vincent.chan --password=vcws@0719***`



fastlane hyper-v:

1. turn on the hyper-v, run it on PowerShell -> Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All

2. install the Ubuntu on right click create new machine in the hyper-v manager.

3. install flutter sdk

4. install andorid studio

5. install ruby

6. install the fastlane

7. install net:
	1. sudo apt-get install net-tools
	2. apt-get install -y openssh-server
	3. edit root password -> sudo passwd root
		switch user -> sudo su
    4. acceprt the root login -> nano /etc/ssh/sshd_config
		PermitRootLogin yes
		service sshd restart
8. install jdk


p.s
1. if the disk storage is not enough,
we need to expand it in hyper-v manager(windows) and then allocate it in linux using gparte not windows.
install gparted first -> sudo apt install gparted

2. you can inpsect the disk location by click the instance and right click the setting and then click the IDE Controller 0 and then click the hard drive.



## Fastlane windows:

1. install the ruby-dev bundle

2. install the fastlane



```
fastlane coammand for build:

// set version

bundle exec fastlane set_vesion_number_ios version_number:"4.4.32"

// set build number by automatically increase 1

bundle exec fastlane set_build_number_ios

// set build number

bundle exec fastlane set_build_number_ios build_number:1

// build xcarchive

flutter build ipa

// build and sign ipa

bundle exec fastlane build_ios

// upload to testflight

bundle exec fastlane upload_to_testflight_ios changelog:"test fastlane upload 001"
```





### Fastlane Setup

#### Introduction

This file describes the project 'YS Mobile App deployments and releases automation'.

Building UAT and PRODUCTION YS Mobile App is a time consuming task as well as require many manual actions. In order to automate the process, a project has been created to study the automation of app deployment, and as a result we have set up the jenkins and fastlane on Mac Book Pro.



#### System Overview

Mac Book Pro is the choice for building device is because of iOS app can only build in Mac OS, where android app can be freely build on Linux, Windows and Mac.

Below are main components in the setup



1. Jenkins

    provide Web UI

    contain pipeline script to control source code download, app build and app upload

2. Fastlane

	a ruby plugin which provide app build and app upload related function

3. Firebase distribution

	for andorid uat app distribution

4. Apple App Connect

    for ios app distribution used for uat with testflight and production release



### Ruby setup

- Update brew
	brew update



- Optional: run below command if brew-core error prompt this is a shallow clone
    `git -C /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core fetch --unshallow`



- install rbenv
    ```
    brew install rbenv ruby-build
    
    echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
    ```


Close terminal and reopen to make the changes take effect



- Optional: command to check rbenv

    `curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash`



- Check available ruby version to install
	> rbenv install -l



- Install ruby 3.1.2
    ```rbenv install 3.1.2
    rbenv global 3.1.2```



- Check ruby version installed
	`ruby --version`



- Install bundler
	`gem install bundler`




### Jenkins setup

- Install jenkins with brew as service
	`brew install jenkins-lts`



- Start / Stop jenkins
    ```brew services start jenkins-lts
    brew services stop jenkins-lts```

As we don't have right to release port, so we still need to VNC remote the Mac Book Pro to access the Jenkins Web Portal


- Jenkins Portal

    ```http://localhost:8080
    
    	login: admin
    
    	pwd: admin
    ```



- access from other machine:
	http://192.168.123.73:8080/





### Credential

- Azure DevOps token for code access with Git
	http://localhost:8080/manage/credentials/store/system/domain/_/newCredentials

- FIREBASE_TOKEN
	firebase app distribution token - refer to android/fastlane/Fastfile

- MAC_PASSWORD
	Xy...5

- APP_CONNECT_KEY_FILE_PATH
	https://appstoreconnect.apple.com/access/api

- Additional programs required to install
    ```
    ggrep
    
    brew install grep
    
    gsed
    
    brew install gnu-sed
    
    Android Studio, Android SDK, Flutter SDK Verify by below command
    
    Flutter doctor
    
    XCode Install from App store. Make sure the XCode can build the project.
    ```


- Jenkins pipeline scripts
    Below is the backup of jenkins pipeline scripts for yesstyle-app app build:
    pipeline-android.groovy script for uat and prod build of android app
    pipeline-ios.grooy script for uat and prod build of ios app
	They are located at:
		`<src_path>/jenkins`



- Fastlane files
    The fastlane files have been committed together into source code. They are located at:
    `<src_path>/android/fastlane/`
    `<src_path>/ios/fastlane/`
    Both the android and ios folders contains 2 important files:
    - Appfile
    This file includes the app information
   - Fastfile
    This file includes fastlane function



- Gemfile (Fastlane setup)
    Fastlane is a ruby plugin and its installation is managed by Gemfile and Gemfile.lock. They are located at:
    `<src_path>/android/`
    `<src_path>/ios/`
    
    - Reference
    	wiki
		https://wiki.yawin.yesasia.com/wiki/index.php/Frontend:Projects:2022:YS_Mobile_App_deployments_and_releases_automation







## Git in Docker

using gitea to host a git server.

1. install the docker.
    `sudo apt-get install docker-ce docker-ce-cli containerd.io`

2. install Python
	`sudo apt install python3 python3-pip`

3. install the docker-CompositeFilter
	`sudo pip install docker-compose`

4. start the docker.
    - check docker is running:
    	`systemctl status docker`
    - start the docker:
    	`systemctl start docker`
    - in wsl using:
    	> sudo service ssh start





## HTST

the HTST is a list that forces browsers to open websites in the list with secure HTTPS connections only.

as google has HTST preload list, and the yesasia.com has set all sub domain to use https,

there will be the https for its all sub domain

```
query domain if use the HTST or not -> chrome://net-internals/#hsts
```
so we need to use fixfore instead chrome.

for Firefox disable the preloadlist:

1. Go to about:config (type it in the address bar)
2. Look for network.stricttransportsecurity.preloadlist and set it to false







## Regular Expression

need to Understand the group, the group 0 is entire string.

the non-capture gorup is (?: ), the capture group is ()

using $1 or $2 to capture the group 1 and group 2

`^` symbol:

    1. When used at the beginning of a pattern, the `^` symbol matches the start of a line. For example, `^abc` matches any line that starts with "abc".
    2. However, when the `^` symbol is used inside a character class (denoted by square brackets `[]`),
    	- it negates the character class. A character class is a set of characters, and a negated character class matches any character that is not in the set. For example, `[^abc]` matches any character that is not "a", "b", or "c".





1. add the quotation in the start and end
	`find with: ^.*$`
	`replace with: "$0",`

2. find the string between the quotation
	```find with: "([^"]+)"
		replace with: $1
	```

3. convert the java bean class to typescript interface
    ```
    find with: ([a-zA-Z0-9_]+) (\w+);
    
    replace with: $2 : $1
    
    source:
    	boolean show;
    
    become:
    	show : boolean
    ```


4. conver the jave bean to typescript interface:
    ```
    find with:  private\s+(\S+)\s+(\S+);
    
    replace with: $2 : $1
    
    source:
    
    private String m_otherInformation;
    
    private List<String> m_packageNotes;
    
    private String videoNDesc;
    
    become:
    
    m_otherInformation : String
    
    m_packageNotes : List<String>
    
    videoNDescriptions: String
    ```

5. convert youtube link:

https://youtu.be/D6s2DzBNyMA?t=880 -> https://www.youtube.com/embed/D6s2DzBNyMA?start=880

https://www.youtube.com/watch?v=VF-ekrdkbAU&t=799s -> https://www.youtube.com/embed/VF-ekrdkbAU?start=799

`regular expression:https?://(?:youtu.be/|www.youtube.com/watch\?v=)([\w-]+)(?:&\S*)?`


```
private static String convertYoutubeUrls(String input) {

    String pattern = "https?://(?:youtu.be/|www.youtube.com/watch\?v=)([\w-]+)(?:&\S*|\?\S*)?";

    String replacement = "https://www.youtube.com/embed/$1";

    Pattern regex = Pattern.compile(pattern);

    Matcher matcher = regex.matcher(input);

    String url = matcher.replaceAll(replacement);

    int i = input.lastIndexOf("=");

    String substring = input.substring(i + 1);

    String startTime = substring.replaceAll("s", "");

    String finalUrl = url.concat("?start=").concat(startTime);

    return finalUrl;

   }
```

try:

	https?://(?:youtu.be/|www.youtube.com/watch\?v=)([\w-]+)(?:&\S*|\?\S*)?


6. convert the html to non html:

    input: Earn<br class="hide-xs"> <span>1</span> YS POINT -> Earn 1 YS POINT
    output: Earn 1 YS POINT

	- please write a java method to covert left side to right according the parttern.

```
public static String cleanString(String input) {

    String htmlTagPattern = "<[^>]*>";

    Pattern pattern = Pattern.compile(htmlTagPattern);

    Matcher matcher = pattern.matcher(input);

    String cleanedString = matcher.replaceAll("");

    cleanedString = cleanedString.replaceAll("\\s{2,}", " ").trim();

    return cleanedString;

}
```


	explanation:
	
	    In the regular expression `<[^>]*>`, the `^` symbol is used inside a character class.
	
	    `[^>]` Indicating matches any character that is not a `>`.
	
	    `[^>]*` The `*` symbol means "zero or more of the preceding element", so indicating to matches zero or more characters that are not `>`.
	
	    Therefore, the whole regular expression `<[^>]*>` matches a string that starts with `<`,
	
	    followed by zero or more characters that are not `>`, and ends with `>`. This is a common pattern for HTML tags.







## HAR file

The HTTP Archive format, or HAR, is a JSON-formatted archive file format for logging of a web browser's interaction with a site.

is network analytics.

1. inspect the website on chrome

2. go to th network tab

3. right and save all as HAR









# Code Design For Server Side



## Dependencies

1. using Analyze in MAVEN tool bar -> Analyze Modules dependencies -> to see the dependencies of each module.
	1. in 2022 version Code -> Analyze Code -> Module Dependencies.

2. Expanding one of these modules will check its dependencies, please be careful that the dependencies are all shown in level one layer.
which means A module using B module and B module using C module, when expanding A module will see the A module depends on B and C modules.
using the Maven Project tab view can only see the A module dependent on which modules directly. like only can see B module.

3. each POM module is a father module, using the dependencies element to include another module will transit the dependencies to the children.

4. using dependencyManagement will not transit the dependencies to children only manage the version.

5. the POM module we can see as a project, inside in the project we can see it as a module.

6. the project can be an inheritance to another project
    ```e.g:
    
    <parent>
    
    <groupId>com.yesasia.parent</groupId>
    
    <artifactId>yesasia-parent</artifactId>
    
    <version>2.2-SNAPSHOT</version>
    
    <relativePath>..\parent\pom.xml</relativePath>
    
    </parent>



    <groupId>com.yesasia.frontend</groupId>
    
    <artifactId>frontend</artifactId>
    
    <version>2.2-SNAPSHOT</version>
    
    <packaging>pom</packaging>
    ```

6. import fahter module(project) will not import their children as dependencies as well.

7. all the jar or dependencies is installed on C:\Users\<User_Name>\.m2 defaultly.
	1. the maven setting file can relocate the installation path.
	`<localRepository>C:/maven_repository</localRepository>`
	2. also we can pass tha argument in command line to change the installation path.
	`mvn -Dmaven.repo.local=/my/local/repository/path clean install`

8.remote repositories can be set on project Pom or its father Pom:
```
    <repository>
    <snapshots>
    <enabled>false</enabled>
    </snapshots>
    <id>public</id>
    <url>http://10.1.4.205:8082/nexus/content/groups/public</url>
    </repository>
```






## Projects & Modules

- each project is the father pom, find it in pom.xml the packaging type is pom.
- each module is son that is inheritance to this father pom.
- like angelfish is a project, angelfish-core, angelfish-dataaccess and angelfish-Memcached are the modules of the angelfish project.



1. yesstyle
	yesstyle-war includes webpage itself

2. yesasia
    flyingfish-war includes webpage with frontend-web which parent module is frontend-wicket

3. jewelfish
    jewelfish-war includes webpage to lanuch

4. frontend-cloud
	the project is springboot project used to replace wicket




## Code Hierarchy

1. presentation layer with Wicket ysContext-url.xml
	1. for HMTL view mapped in the server bootstrap:
	- rule1:
		1. The file frontendContext-service-url-ysMountPath.xml contains the URL path used by ysContext-url.xml to map classes to pages.
		2. The ysContext-url.xml file is a mapper that defines the Java class corresponding to the path (URL) referenced by YsWebApplication.java.
		3. The path (URL) and corresponding Java class will be created at server bootstrap through the YsWebApplication.java.
		4. Each bean in ysContext-url.xml represents a com.yesasia.frontend.rest.web.wicket.support.url.MountPath object that includes both the page class and its corresponding path.
		5. YsWebApplication#initMountPaths maps the full URL path to a Java class page using MountedMapper.
		6. Each URL that refers to the page class will create a new MountedMapper. This mapper will be used for users to access the HTML.
		7. YsSupport is used to analyze the URL provided by ***UrlContext.
	- rule2:
		8. like the jewelfish. using programatically to write down the mapping.
		9. mount(new BookmarkablePageRequestTargetUrlCodingStrategy("coupon", CouponPage.class, null /* pageMapName */));
		in JewelfishApplication#doInit

	2. access the server after bootstrap:
		1. in step a, all the path is mounted to the pageclass using MountedMapper.
		2. user enter the url to access website will call the AbstractBookmarkableMapper#mapRequest to get the corresponding pageclass through the PageProvider.
		3. in MountedMapper#parseRequest will return the UrlInfo including the pageclass and the parameter.
		4. how do we get the correct MountedMapper in step b3? in CompoundRequestMapper class there will call the mapperWithScore#getMapper to get highest score IRequestMapper(MountedMapper).

	3. for restful API
		***Resource
		1. using annotation @ResourcePath in class level
		2. using annotation @MethodMapping in mehtod level

	4. for filter
		***filter
		1. the filter would be as a controller in springMVC
		
	5. quick find java class using html:
		1. for PLP, find the list.html which displayed on address bar with suffix xml.
		2. using the bean id to find the got in e1 step to find the corresponding java class.



2. BLL with Spring

	1. ***Service
		1. using annotation @Dependency and @SpringBeanId to inject the service

	2. transaction will be placed on service layer automatically by spring.
	1. if the function has a error, will catch by spring.
	2. in the catch block in the spring framework will do the rollback.
	3. after the rollback,spring will throw another exception to notify developer.
	4. the whole thread will be dead if developer does not catch it by himself.


3. DAL with hibernate
	1. ***Dao
		1. using XML to inject the Dao to Service layer
		2. angelfishContext-dataaccess.xml is used to create session factory
		3. angelfishContext-dataaccess.xml is also used to define the annotatedClasses to tell spring maintanace the annotation.



- flow for DDL -> PoJo -> DAL -> DAO test -> BLL -> Mock test -> API -> UAT DDL -> Prod DDL:

1. design the table and write down the SQL in 001_initial.sql file

2. design the domain to relate to this table.
	1. create a domain for representing the table, for this domain the annotation @Entity and @Table is needed.
	2. the @SequenceGenerator is used for what generator should be used, this generator is defined in the creation table SQL

3. create Dao interface and its implementation to relate to the table, write down the bean for your DAO object in angelfishContext-dataaccess.xml (config the domain and DAO )
	1. create a new DAO test class to test this DAO (detail below)
	2. due to code coverage criteria, the test case should try its best to maximize the coverage.

4. create Service interface and its implementation to invoke DAO method, the insert and update method need to add @Transactional(propagation=Propagation.REQUIRED)
	1. the frontendContext-service-xxx.xml need to be created to be included in IOC
	2. and frontendContext-service-core.xml need to import the frontendContext-service-xxx.xml
	3. the test case(mock test) is also being created to test this service. (detail below)

5. controller layer to retrieve the data to invoke service layer method.
	1. the controller is split into two types, HTML view and restful.
	2. the HTML view uses wicket to render the UI.
	3. the restful is used by App(flutter) to invoke it to retrieve data.

6. create the test class for Dao and service
	1. the DAO test class need to depend on vincent/settings.xml(used to set up the DB connection string),001_initial.sql(create table),
	- AbstractHibernateDaoTest(inject bean) xxxTest.xml(to insert data set) and
	2. the service test also needs to be created, for the service layer the test should be the mock test. please refer to the test case section describing the mock test in more detail.

7. except for the DEV environment(test case using DEV DB), the UAT environment(Local server bootstrap) is needed to ask the DB team to create a new table or add a new column if need.







## Coding Tips

- find the HTML or Java class:
    - when there is a task to ask for add the element or component or edit the note, first thing we need to do is finding the right place to insert the code.

1. set the breakpoint in CompoundRequestMapper#mapRequest line 62, the pageClassProvider will include the java class.
	- the corresponding HTML will place on the same folder may be the same name with a different suffix.

2. find the HTML translation text on the jewelfish to get the asset key. and global search the asset key to finding the HTML

3. if the HTML does not have the  translation text, we can find the tag id to find the corresponding HTML.

4. using the url to find the configuration file, like list.html, golbal search it and find the xml in your project, in this case is ysMountPath.
	- golbal search bean id after you find the xml, here  is frontend.ysMountPath.BROWSE.
	- after search frontend.ysMountPath.BROWSE, you can find the ysContext-url.xml which include the path property, the pageClass is the java class to render list.html

- p.s. 
	- method 1 is finding the place through the class and method 2,3 is finding the place through HTML. method 4 is more efficiency.
	- method 1 needs to debug, 2 and 3 are not accuracy



### Breakpoint Skill:

1. set the breakpoint on the place you want to stop after the server ran on debug mode.

2. the breakpoint can be set as the exception type,
	if you know the program throws the exception type but does not know what code snippets have the problem.

3. the breakpoint has an inline/method/exception type.



### Debug at the runtime

#### for jar
```
    java -Xmx2048m -DisMassUpdate=false -DfasterSpringInit=false

    -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=1044

    -jar target/jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar
```


the core command is : 
`-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=1044`


    The application, at launch, will wait until you connect from another source.
    
    In IntelliJ, the drop-down list next to the run button select the Edit configuration and Click the + sign,
    
    Select the Remote type and edit the text field named Port and run this configuration.

#### for tomcat

1) Start Tomcat in debug mode

    $TOMCAT_HOME/bin/catalina.sh jpda start

    By default JPDA_ADDRESS is defined as "localhost:8000" in catalina.sh

    Change to a different port as need



2) In IntelliJ IDE

    Click Run > Edit Configurations

    Click + icon on the top-left toolbar

    Click Remote

    Enter a name you want in Name input box

    Enter 8000 in Port input box under Settings section


3) Click Apply, then OK


4) Run > Debug..., Click the configuration you just created



- Member filed:

all the members filed using prefix m_

since the m_ will be erased for injection in the run time.



- properties:

the property is the name after setXXX the first letter after set is become to lower case.

like setNameAge, the property will become nameAge, the json will return nameAge as varibale name;



- get current user:

Shopper shopper = getYsContext().getShopper();



- set style for class:

    new ClassAttributeAppender( " " + "joinInfluencer")

    or

    new AttributeModifier("sku","xxxx")



- set WebMarkupContainer:
    ```
    get the markup(tag) in HTML with id linkContainer (not really get but will modify that markup during rendering) ->
    
    new WebMarkupContainer("linkContainer");
    
    and need to set wicket id in HTML  ->
    
    <wicket:enclosure child="linkContainer">
    
    <li wicket:id="linkContainer" class="sideNavContentList ng-scope"><a wicket:id="link" href="#" class="arrowLink">Order Tracking</a></li>
    
    </wicket:enclosure>
    
    enclosure attribute ->
    
    enclosure is used for hidden the element if the related data value is not visible.
    
    like above if the linkContainer is set as invisible, note the <li wicket:id="linkContainer" class="sideNavContentList ng-scope"> is hidden,
    
    but also other tag and element(like tag a) is hidden too.
    
    for the child attribute ->
    
    once wicket component is more than one, we can use child attribute to specify which component will control the overall visibility.
    
    like above the linkContainer will control whole block visibility.
    ```



- update account:

PersonalInformationRestResource.PersonalInformationFormJsonData()



 - Annotation:

	- @CacheDomainObj:

    annotation with CacheDomainObj is used to save data from DB to the cache server.

    when the data cache, the data will retrieve from the cache server for the next time request.


	- the cached class CacheAspect
	
	- @CacheObject(cacheType = CacheType.ONE_HOUR) ->  as spring local cache, the dto class need to implement Serializable for IO purpose
com.yesasia.frontend.cloudservice.cache.annotation.CacheAspect#cacheObject
using AWS memory cached

	- @CacheInternalObject(cacheType = CacheType.ONE_HOUR) -> using memcached, no need to implement Serializable
com.yesasia.frontend.cloudservice.cache.annotation.CacheAspect#cacheInternalObject
using ram memcached cached

P.s
1. Each method should have its own cacheType for storing the key inside it.

    For example,

    	use PRODUCT_REVIEW_INIT(CacheType.ONE_HOUR_IN_MIN, "ProductReviewInit").

    Otherwise,

    	the cache will be overwritten by the same key in a different method.

2. Since mechanism is based on proxies, only 'external' method calls coming in through the proxy will be intercepted. This means that 'self-invocation',

    i.e. a method within the target object calling some other method of the target object, won't lead to an actual effect.

	- splashPage.java is the home page.



- Constant:

please use Enum as a constant in \rainbowfish\util\constant

refer to RegistrationSourceType



- UAT and Warmup problem:

the warmup may not be built if the feature does not appear, we can check it on the Jenkins to see the last build time.



- Web notification:

the web notification will be displayed on the right top corner after clicking if the website implements the notification.



- Force upgrade:

1. add the version in _MINOR_VERSIONS_TO_BE_FORCE_UPGRADE for AbstractFrontendAppRestResource.java.

the number is before the pervious viersion.

if add to 4.4.18 means the version before 4.4.19 is needed to be updated

2. after force upgrade app version we need to send the email or reply the app relase email like:
```
Hi team,

Force update of Mobile App 4.4.xx is done at around xxx.

Thanks,

XXX

and send the message to frontend team group.
```

3. ask to deploy ys and ysv3co.

4. for demo app to avoid force update, change the pubspec.yaml and build.gradle to let it greater than force ugprade version.




- Soft upgrade:

```
link:http://wiki/wiki/index.php/Frontend:Projects:2018:Operation_Tasks#Add_mobile_app_version_for_soft_update
```
```
1. update the com.yesasia.frontend.rest.resource.AbstractFrontendAppRestResource#_MINOR_VERSIONS_REQUIRE_SOFT_UPGRADE
```
2. ask to deploy ys and ysv3co.



- server:

	- production:

        1. YS server.
	        
        2. ysv3co or ysco
	        
        3. ya
	        
        4. yaco
	        
        5. ys-api
	        
        6. cloud-rest

		ps. (co means the checkout)

	- UAT:

		1. warmup ys







## Feature Switch

### Server

1. first way:
    - FeatureSwitch.java will control the feature on or off via the HTTP header

    - FeatureSwitchFilter.java is used to get value from the header to determine feature is turned on or not.
		-> the FeatureSwitchFilter will set a field of FeatureSwitch to be true if the header has this value with true.
	- FeatureSwitchUtil.java is used to get the feature is enabled.



2. second way:
	we can turn on the feature by setting the argument in the server.

	1. the Monolith application:
    location:
		```
        scripts location->
        /etc/init.d/uat.ys.tomcat759
        enable feature using server argument->
        CATALINA_OPTS="$CATALINA_OPTS -DenableYsIndiaTax=true"
		```
2. the container:
	1. as the platform become using cloud, so the new deployment is using docker container.
	2. docker exec -it uat.ys.tomcat796 /bin/bash -> go inside to the docker container
	3. cd to /opt/apache-tomcat-7.0.96/bin
	4. the setenv.sh will include all the env parameter
	5. cat xxx | grep yyy to find the text in a file.
		xxx is file name, yyy is the text you want to search.
	6. or using the grep -E to grep multiple file
		`grep -E 'fatal|error|critical|failure|warning|' *.log`
	7. if still can not find the environment argument, we can use ->  ps aux | grep tomcat
	this command will show the environment setting for this process.
	8. as mentioned above, the project using docker now, the environment may set in the docker-compose file.
	- using command -> [find . -name docker-compose.yaml] to find the file.
	- should be placed on /home/ec2-user/tomcat796-ys-docker-uat/docker-compose.yaml

3. Modheader:
used for FeatureSwitch. the FeatureSwitchFilter will eat the header and turn on or off the feature.
there is another path to set the feature on or off. like, set it to server bootstrap.
1. warmup website header
	1. YSZpI8fQqeWHWARMUP = true
	2. towicketuat = true -> due to nextjs framework will be lanuch, we need to switch to old one for warmup.
	3. nextjs = true -> to turn on the nextjs.

2. enableYsOracleResponsysWebNotification -> web push for oracle
3. enableYsPointsGiveaway2022 -> luck draw.
4. enableYsSmartBanner -> smart banner
5. tracking -> turn on the dataLayer
6. enableYsGa4WebPhaseOne -> turn on the ga4 for web
7. enableYsOverrideShoppingBagRevampInUat -> turn off the blocking checkout.

- p.s after feature is ready for Production, we need to chagne the feature always to be true in FeatureSwitch.


### App

1. using DynamicControlService.dart to indicate the feature enable or not.
2. in the MainScreen.dart will call the server to get enabled feature. [ FrontendContext.of(context)!.dynamicControlValues = frontendContextJsonData.dynamicControlValues!;]
3. the server path is /app-rest/shopper/v1/init-frontend-context, -> com.yesasia.yesstyle.app.wicket.rest.resource.AppShopperRestResource.java#initFrontendContext







## Wicket

structure:

	component
	
		MarkupContainer
	
			webMarkupContainner
	
				Panel
	
		page



- inheritance:

    grandfather ->  the HTML with top design like header footer etc.

    fahter -> extend the grandfather, just need design what we need.

    son -> extend the father, just design with more specific UI.

    when the son is requested, the grandfather will be rendering and then the father will be rendering. last, the son will be initialized.



    HTML has child tag will indicate this HTML is father.
    
    HTML has panel or extend that indicate this HTML will attach to other HTML which contains the child tag.



    when Class A(YsTemplatePage) is father class, the Class B(PointsGiveaway2022Page) extend it, the class A's HTML hosts the child tag, the class B's HTML with the extend tag.
    
    the class B HTML will be attached to class A HTML.
    
    if the HTML is a panel it can be attached to any wicket container. like PointsGiveaway2022(panel) is attached to the PointsGiveaway2022Page(container).
    
    noted that the PointsGiveaway2022 is subclass of the AbstractYsPanel.



- tag:

    prefix is wicket:,

    0.wicket:id

    1.wicket:panel

    2.wicket:extend

    3.wicket:child

    4.wicket:fragment

    5.wicket:head

    6.wicket:remove

    7.wicket:enclosure

    8.wicket:border



- view rendering:

	wicket:container can add another component in it by using wicket:id



- edit HTML with adding new link step:

	- e.g for mobile view:

        1. add a new option in the header.java will show the link on the mobile view footer
        
        2. add one more style class for this link otherwise will reuse another link style
        
        3. create one more method on MobileScreenSizeHeaderOptions.java named createInfluenceLink to populate the influencer style link.



- rendering step:

0. user request book.html url

1. wicket filter used to find out the correct java class

2. the son of WebApplication will overwrite the init method,

    - in this method we can call the mountBookmarkablePage to mount path with java class

    - like : mountBookmarkablePage("/book", Book.class);

3. rendering the book HTML using Book.class

4. there will be rendering another HTML page if the Book.class using another UI class.

    like ->

    add(new Items("orderedItemsContainer") the item is another component has corresponding HTML.



- link added:

    options.add(new Header.Option(getYsUrlService()

    .getYsInfluencerUrl(getSite(), getLang()),

    displayByResourceKey("YS_banner.influencer.nonMember")));



- restriction:

    each HTML should have a corresponding java class.

    each wicket:id defined in HTML must be used in the java class, if we do not need it we can only set it as invisible.

    Unable to find component with id xxx will be thrown if we do not use it but defined in HTML.

    if this component is a father tag, we must use it to add its children's tag in it, otherwise, the children's tag will throw the exception.



- PropertyModel:

    bind the filed from the object to the ajax box:

    AjaxCheckBox result = new AjaxCheckBox("multipleCoupon",

    new PropertyModel(getCouponModel(), "multipleCoupon")) {

    this statement is binding the filed  m_multipleCoupon of CouponModel to multipleCoupon in HTML.

    when every check or uncheck will update the m_multipleCoupon automatically.



- with angular design:

    using directive with the AttributeModifier to control the that HTML block logic.

    like directive

    	app.directive("ysPointsGiveawayResultDialogOracle", function($window, $rootScope)

    in JAVA:

    	result.add(new AttributeModifier("ys-points-giveaway-result-dialog-oracle",""));

    The tag in HTML will append the ys-points-giveaway-result-dialog-oracle Attribute in it, and angularjs directive can control it now with ysPointsGiveawayResultDialogOracle



- write the message to HTML:

1. using model to do that

    the example is shipping message, the data is in ShoppingBagBasketItemJsonData#m_newFreeShippingNote

    it will be retrieved using the NgBindHtmlAttributeModifier(AngularJsUtil.getCamelName(_SHOPPING_BAG_MODEL,ShoppingBagBasketItemJsonData.NEW_FREE_SHIPPING_NOTE))

    the NEW_FREE_SHIPPING_NOTE is the attribute name for the ShoppingBagBasketItemJsonData

    the wicket framework is using NgBindHtmlAttributeModifier to do retrieves logic and bind to to the wicker id -> freeShippingMessage

2. using FrontendLabel to do that -> result.add(new FrontendLabel(wicketId + "SubTitle", subTitle)); , in java flie.

	1. simpe usage -> result.add(new FrontendLabel(wicketId + "Title", title));
	2. if we need to add the attribute after change text ->  
		- FrontendLabel frontendLabel = new FrontendLabel(wicketId + "ButtonDownload", buttonDownload);

		- frontendLabel.add(new AttributeModifier("href",encodeUrl));

3. using displayByResourceKey to do that -> Option influencerOption = new Option(getYsUrlService().getYsInfluencerUrl(getSite(), getLang())..., for simple link.

4. using message key to do -> <wicket:message key="cart.note.tipsForGettingOrdersFasterHolidaySeason">, embeded to html.



- replace HTML attribute:

result.add(new AttributeModifier("sku",String.valueOf(product.getProductId())));





- injection timing:

0. need to distinguish what is the Initialization and instantiation

    - Instantiation: The new keyword is a Java operator that creates the object.

    - Initialization: The new operator is followed by a call to a constructor, which initializes the new object.

    - the child being instanted, and call the father to do the instantiation, after its father instantiation will do the Initialization before child.

1. using the ancestor constructor to do the injection.

2. since the all page class need to call ancestor constructor, so the step 1 working.

3. in the Component(SpringComponentInjector) class(ancestor of all page class), will use the reflection to get all fields of current class.

4. once all feilds got, using the reflection with spring locator to create the dependency object and inject to in to current target object.
```
java.lang.Thread.State: RUNNABLE

at org.apache.wicket.proxy.LazyInitProxyFactory.createProxy(LazyInitProxyFactory.java:135)

at org.apache.wicket.spring.injection.annot.AnnotProxyFieldValueFactory.getFieldValue(AnnotProxyFieldValueFactory.java:167)

at org.apache.wicket.injection.Injector.inject(Injector.java:111) -> for loop all fields of the current object

at org.apache.wicket.spring.injection.annot.SpringComponentInjector.inject(SpringComponentInjector.java:124)

at org.apache.wicket.spring.injection.annot.SpringComponentInjector.onInstantiation(SpringComponentInjector.java:130)

at org.apache.wicket.application.ComponentInstantiationListenerCollection$1.notify(ComponentInstantiationListenerCollection.java:38)

at org.apache.wicket.application.ComponentInstantiationListenerCollection$1.notify(ComponentInstantiationListenerCollection.java:34)

at org.apache.wicket.util.listener.ListenerCollection.notify(ListenerCollection.java:80)

at org.apache.wicket.application.ComponentInstantiationListenerCollection.onInstantiation(ComponentInstantiationListenerCollection.java:33)

at org.apache.wicket.Component.<init>(Component.java:687)

at org.apache.wicket.MarkupContainer.<init>(MarkupContainer.java:121)

at org.apache.wicket.Page.<init>(Page.java:168)

at org.apache.wicket.Page.<init>(Page.java:157)

at org.apache.wicket.markup.html.WebPage.<init>(WebPage.java:105)

at com.yesasia.frontend.rest.web.wicket.page.AbstractFrontendWebPage.<init>(AbstractFrontendWebPage.java:57)

at com.yesasia.yesstyle.web.wicket.page.AbstractYsWebPage.<init>(AbstractYsWebPage.java:363)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.<init>(YsTemplatePage.java:247)

at com.yesasia.yesstyle.web.wicket.page.checkoutpage.CheckoutTemplatePage.<init>(CheckoutTemplatePage.java:33)

at com.yesasia.yesstyle.web.wicket.page.checkoutpage.OrderConfirmationPage.<init>(OrderConfirmationPage.java:151)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)

at org.apache.wicket.session.DefaultPageFactory.newPage(DefaultPageFactory.java:171)

at org.apache.wicket.session.DefaultPageFactory.newPage(DefaultPageFactory.java:99)

at org.apache.wicket.DefaultMapperContext.newPageInstance(DefaultMapperContext.java:137)

at org.apache.wicket.core.request.handler.PageProvider.resolvePageInstance(PageProvider.java:268)

at org.apache.wicket.core.request.handler.PageProvider.getPageInstance(PageProvider.java:166)

at org.apache.wicket.request.handler.render.PageRenderer.getPage(PageRenderer.java:78)

at org.apache.wicket.request.handler.render.WebPageRenderer.respond(WebPageRenderer.java:279)

at org.apache.wicket.core.request.handler.RenderPageRequestHandler.respond(RenderPageRequestHandler.java:175)

at org.apache.wicket.request.cycle.RequestCycle$HandlerExecutor.respond(RequestCycle.java:890)

at org.apache.wicket.request.RequestHandlerStack.execute(RequestHandlerStack.java:64)

at org.apache.wicket.request.cycle.RequestCycle.execute(RequestCycle.java:261)

at org.apache.wicket.request.cycle.RequestCycle.processRequest(RequestCycle.java:218)

at org.apache.wicket.request.cycle.RequestCycle.processRequestAndDetach(RequestCycle.java:289)

at org.apache.wicket.protocol.http.WicketFilter.processRequestCycle(WicketFilter.java:259)

at org.apache.wicket.protocol.http.WicketFilter.processRequest(WicketFilter.java:201)

at org.apache.wicket.protocol.http.WicketFilter.doFilter(WicketFilter.java:282)

at org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1484)
```




- injection error:

```
@TypeDefs({

@TypeDef(name="string", typeClass = StringType.class),

@TypeDef(name = "status", typeClass = GenericEnumUserType.class,

parameters = {

@Parameter(name = "enumClass", value = "com.yesasia.rainbowfish.util.constant.checkout.OrderActTrackingStatus"),

@Parameter(name = "identifierMethod", value = "id"),

@Parameter(name = "valueOfMethod", value = "byId") })

})
```
because there has Entity is using @TypeDef(name = "status"), change the name to fix it.



- stacktrace:

```
java.lang.Thread.State: RUNNABLE

at com.yesasia.angelfish.domain.checkout.OrderActTracking.<init>(OrderActTracking.java:50)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)

at org.hibernate.engine.UnsavedValueFactory.instantiate(UnsavedValueFactory.java:45)

at org.hibernate.engine.UnsavedValueFactory.getUnsavedIdentifierValue(UnsavedValueFactory.java:67)

at org.hibernate.tuple.PropertyFactory.buildIdentifierProperty(PropertyFactory.java:67)



java.lang.Thread.State: RUNNABLE

at com.yesasia.angelfish.domain.checkout.OrderActTracking.<init>(OrderActTracking.java:50)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)

at org.hibernate.engine.UnsavedValueFactory.instantiate(UnsavedValueFactory.java:45)

at org.hibernate.engine.UnsavedValueFactory.getUnsavedIdentifierValue(UnsavedValueFactory.java:67)

at org.hibernate.tuple.PropertyFactory.buildIdentifierProperty(PropertyFactory.java:67)

at org.hibernate.tuple.entity.EntityMetamodel.<init>(EntityMetamodel.java:135)

at org.hibernate.persister.entity.AbstractEntityPersister.<init>(AbstractEntityPersister.java:485)

at org.hibernate.persister.entity.SingleTableEntityPersister.<init>(SingleTableEntityPersister.java:133)

at org.hibernate.persister.PersisterFactory.createClassPersister(PersisterFactory.java:84)

at org.hibernate.impl.SessionFactoryImpl.<init>(SessionFactoryImpl.java:286)

at org.hibernate.cfg.Configuration.buildSessionFactory(Configuration.java:1845)

at org.springframework.orm.hibernate3.LocalSessionFactoryBean.newSessionFactory(LocalSessionFactoryBean.java:860)

at org.springframework.orm.hibernate3.LocalSessionFactoryBean.buildSessionFactory(LocalSessionFactoryBean.java:779)

at org.springframework.orm.hibernate3.AbstractSessionFactoryBean.afterPropertiesSet(AbstractSessionFactoryBean.java:211)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.invokeInitMethods(AbstractAutowireCapableBeanFactory.java:1477)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.initializeBean(AbstractAutowireCapableBeanFactory.java:1417)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:519)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:456)

at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:291)

at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222)

- locked <0x211d> (a java.util.concurrent.ConcurrentHashMap)

at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:288)

at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:190)

at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:322)

at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:106)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1325)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1086)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:517)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:456)

at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:291)

at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222)

at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:288)

at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:190)

at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveReference(BeanDefinitionValueResolver.java:322)

at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:106)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1325)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1086)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:517)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:456)

at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveInnerBean(BeanDefinitionValueResolver.java:270)

at org.springframework.beans.factory.support.BeanDefinitionValueResolver.resolveValueIfNecessary(BeanDefinitionValueResolver.java:120)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyPropertyValues(AbstractAutowireCapableBeanFactory.java:1325)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.populateBean(AbstractAutowireCapableBeanFactory.java:1086)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:517)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:456)

at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:291)

at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222)

at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:288)

at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:194)

at org.springframework.aop.framework.autoproxy.BeanFactoryAdvisorRetrievalHelper.findAdvisorBeans(BeanFactoryAdvisorRetrievalHelper.java:86)

at org.springframework.aop.framework.autoproxy.AbstractAdvisorAutoProxyCreator.findCandidateAdvisors(AbstractAdvisorAutoProxyCreator.java:100)

at org.springframework.aop.aspectj.annotation.AnnotationAwareAspectJAutoProxyCreator.findCandidateAdvisors(AnnotationAwareAspectJAutoProxyCreator.java:84)

at org.springframework.aop.aspectj.autoproxy.AspectJAwareAdvisorAutoProxyCreator.shouldSkip(AspectJAwareAdvisorAutoProxyCreator.java:107)

at org.springframework.aop.framework.autoproxy.AbstractAutoProxyCreator.postProcessBeforeInstantiation(AbstractAutoProxyCreator.java:278)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.applyBeanPostProcessorsBeforeInstantiation(AbstractAutowireCapableBeanFactory.java:848)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.resolveBeforeInstantiation(AbstractAutowireCapableBeanFactory.java:820)

at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:446)

at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:291)

at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222)

at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:288)

at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:190)

at org.springframework.beans.factory.support.DefaultListableBeanFactory.preInstantiateSingletons(DefaultListableBeanFactory.java:580)

- locked <0x211e> (a java.util.concurrent.ConcurrentHashMap)

at org.springframework.context.support.AbstractApplicationContext.finishBeanFactoryInitialization(AbstractApplicationContext.java:895)

at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:425)

- locked <0x211f> (a java.lang.Object)

at org.springframework.web.context.ContextLoader.createWebApplicationContext(ContextLoader.java:276)

at org.springframework.web.context.ContextLoader.initWebApplicationContext(ContextLoader.java:197)

at org.springframework.web.context.ContextLoaderListener.contextInitialized(ContextLoaderListener.java:47)
```






## Springboot

frontend-cloud is the springboot project used to replace the wicket

1. how to run it
	1. as this project is set to build the war in frontend-cloud/cloud-service/pom.xml and deploy it into tomcat, we can not run after build the war.
		1. set the spring-boot-starter-tomcat scope to comiple for the cloud-service in the pom.xml (optional)
		2. right click the cloud service to open the module setting
		3. set the provided to complie which relating to the tomcat.
		4. reason: as the springboot is building a war and deploy to tomcat, so all lib about tomcat need to set as the provided. change it to compile as we wanna run it standalone.
	2. using springboot maven plugin to run it
		1.  add the plugin in the  frontend-cloud/cloud-service/pom.xml
        ```
        <build>
		
        <plugins>
		
        <plugin>
		
        <groupId>org.springframework.boot</groupId>
		
        <artifactId>spring-boot-maven-plugin</artifactId>
		
        <version>${spring.boot.version}</version>
		
        </plugin>
		
        </plugins>
		
        </build>
        ```

		2. run by :
        ```
        mvn spring-boot:run -D"spring-boot.run.profiles"=dev
		
        mvn spring-boot:run -D"spring-boot.run.profiles"=staging
		
        mvn spring-boot:run -D"spring-boot.run.profiles"=prod
        ```

	3. how to debug it
		- method 1:
		1. right click the main entry point like : 			FrontendCloudServiceApplication#main, select the debug
		2. if fail to start, click the File | Project Structure | Modules | cloud-service(select the module) | type tomcat | set all the tomcat as complie scope

		
		
		- method 2:
		3. open maven panel, if not found, view | tool windows | maven
		4.  find the cloudservice module in the frontend-cloud project
		5.  expand the Plugins floder, find the spring-boot, expand it and right click the spring-boot:run, select debug
		6.  if debug not work, right click the spring-boot:run | modify Run configuration | replace the run command -> spring-boot:run -Dspring-boot.run.fork=false -f pom.xml


2. dao is used JPA and the default implementation is hibernate.



3. profile selection

	1. Use one of the following commands to run the application with a specific profile:
    ```
    - mvn spring-boot:run -D"spring-boot.run.profiles"=dev
    - mvn spring-boot:run -D"spring-boot.run.profiles"=staging
    - mvn spring-boot:run -D"spring-boot.run.profiles"=prod
    ```
	Note that you should run these commands in the frontend-cloud/cloud-service module.

	2. Each command above selects a profile based on its corresponding folder (e.g., prod, staging, or root for dev).

	3. The file frontend-cloud/cloud-service/src/main/resources/application.properties (which defaults to dev) sets the active Spring profile as "dev".

	4. The file frontend-cloud/cloud-service/src/main/resources/frontend-cloud-service.xml loads another configuration file using this line of code:

`<import resource="classpath:frontendContext-cloud-core.xml"/>.`

	5. Since Spring treats all modules in the same classpath, it can read all config files from other modules too.
	
	6. Based on both the active Spring profile and <import resource="classpath:frontendContext-cloud-core.xml"/>,
Spring Boot will load frontendContext-cloud-core.xml in classpath from other module.

	7. The imported frontendContext-cloud-core.xml contains all import resource, the  `<import resource="classpath:frontendContext-cloud-core-profile.xml"/>`
	will be loaded, which is used by srpingboot to select a specific profile.
	
	8. The imported frontendContext-cloud-core-profile.xml contains all import resource, the <import resource="classpath:frontendContext-cloud-profile-${spring.profiles.active}.xml"/>

will be loaded to be used to select a specific profile.

	9. Finally, Spring selects a specific profile based on its corresponding attribute value beans profile="prod"  (e.g., prod, staging, or root for dev).
	
	10. In conclusion, all profiles will be imported and Spring Boot will select the one to activate based on the value of "spring.profiles.active".



4. incorrect data result from restcontoller
	1. make sure get and set method is correct,like getBrandReviewRating and setBrandReviewRating, the json name will become brandReviewRating.
    because the property name JSON interpreter to retrieve is from getter method, remove get and first letter becomes low capital is brandReviewRating,

	2. the modifier of the field make sure is private, otherwise two same name field will be generated to JSON.



5.local connect to production ENV:
	1.  change the conncetion content in the application.properties
	2.  copy DB connect String from  prod\application.properties to resource\application.properties
	3.  do not overwrite the spring.profiles.active=dev to  spring.profiles.active=prod. otherwise there will have CROS error
	4.  you can compare CROS setting in com.yesasia.frontend.cloudservice.config.ProductionConfig and com.yesasia.frontend.cloudservice.config.DevConfig
	5.  for DEV there will allow all the origin, but for PROD there will only allow the origin in the list.




## Translation i18n

the translation can be found with the key in editorial -> asset-search in the jewelfish backoffice website.
> StringResourceUtil.getStringResourceModel()
	> LoadableDetachableModel<T>
		> FrontendStringResourceModel.getString()
			> FrontendStringResourceModel.getLocalizer()
				> ResourceSettings.setLocalizer()
					> Localizer.getString()
						> ResourceSettings.ResourceSettings()







## Using Jewelfish to Login User Account

- Prod:

Customer -> shopper request login. the email will send to my email.


- Local:

1. Maven setting file(ys.bat) can set angelfish module to be -pProd which is pointing to connect to production DB.

2. run the jewelfish server.

3. repeat the step like production in local jewelfish server. the link will send to my email

4. click the link to login user account with debug mode can trace the issue.



- debug with login user account:

1. sometimes we can not grep the log we want to reproduce the behavior we can use request to login the account.

2. or we found the log but we want to verify the error is thrown by this behvaoir of this user.







## Send email

1. Use company email to receive the non-production email from the YesStyle website.

2. the reason is that your local server doesn't have a valid SSL cert so the public email won't accept this and emails need public IP.







## Local checkout & pay

prerequisite:

	select HK region to checkout with cheque in UAT but not include in DEV.



method 1:

	remove the commit of 86159.



method2:

	ysContext-application-overrideForDev.xml
	
	comment below bean definition is ok.
```
    <bean id="checkout.order.placeOrderSupport" class="com.yesasia.frontend.checkout.order.PlaceOrderSupportImplForDev">

    <property name="checkoutService" ref="checkout.service"/>

    </bean>
```


## Switch java version

using jabba to swich the java version;

1. install jabba
	1. open powershell
	2. install command
```
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Invoke-Expression (
Invoke-WebRequest https://github.com/shyiko/jabba/raw/master/install.ps1 -UseBasicParsing
).Content
```
	3. command list

```
# list available JDK's
jabba ls-remote

# list installed JDK's
jabba ls

# install a JDK
jabba install <version>

# uninstall a JDK
jabba uninstall <version>

# set local JDK
jabba use <version>
```



# Code Design For Client Side(Flutter)
## Code hierarchy

- Context:
    like a tree to store the matter that App need
    and FrontendAppState will save all the context.
    set APP access Server URL:
    DataService.dart  _SERVER_URL



- navigator tab(bottom button):
	TabNavigator.build()



- shopping bag class:
	ShoppingBag._createMainContent()




## Coding tips

- Find the widget:

    when we have a task like modifying the UI or adding the note, the first thing we need to do is to find out the widget that needs to be changed.

    1. using flutter inspector on the far right bar, and click the toggle select widget mode.

    we can like inspect HTML to select the widget and redirect to dart class.

    2. set the breakpoint to verify the page is stuck on the breakpoint.



- Flutter inspector(like press F12 inspector in chrome):

1. using flutter inspector for finding the widget(base on UI) on which class.
    	Select widget mode ->

    	click the component on App screen will locate the corresponding code.

2. also can use the flutter inspector for finding the class(base on code) on which widget
    Select widget mode ->

    click the element on inspector tree will locate the corresponding UI in app screen.
    	
    before click the element on inspector, you can use the search function(search icon) to find the class first.
    	
    for point 1, you can locate the code with clicking the UI directly, like you want to edit the UI, you can use this to find the corresponding code with current UI.
    	
    for point 2, you can locate the UI with clicking the code in flutter inspector tree, like you want to see the current code how to present with corresponding UI.



- Add a note in the shopping bag:
		shoppingBag.dart needs to be changed
		all the note content, title, and note description should be retrieved from the server.



- Flutter upgrade
  after flutter upgrade, we need to update the laster command tool
    1. Open Android Studio

    2. Tools Menu, SDK Manager

    3. In the window that comes up there are inner panels, choose the SDK Tools panel

    4. Tick Android SDK Command-line Tools

    5. Choose Apply button near the bottom of the window



- Downgrade flutter:
        run -> flutter downgrade v2.2.3
        run -> flutter pub get -v (the v for verbose)


- reinstall library:
		flutter pub cache repair



- flutter release:
	Waiting for another flutter command to release the startup lock ->

- Linux:
	killall -9 dart

- Windows:
	taskkill /F /IM dart.exe



- certificate issue:
	the certificate issue will block to use the flutter pub get.

- solution:

```
    Set a new environment variable as variable name: DART_VM_OPTIONS and variable value: --root-certs-file=some_file (some_file = C:/certs/cert.pem)
    
    Be sure to restart PowerShell or the Command Prompt for changes to reflect.
    
    Now run "flutter packages get" in the flutter app's directory.
    
    how to convert to Pem:
    
    need to install OpenSSL-Win64
    
    openssl x509 -in mycert.crt -out mycert.pem -outform PEM
```


- step for find the cer and import:

1. First export the certificate using a broswer(Chrome in my case) and save it a local path e.g. desktop.

2. The file should be with a .cer extension.

3. Then using openssl convert the .cer file into .pem file.

4. Using the command as shown here.

5. Create an environment variable DART_VM_OPTIONS and set its value to --root-certs-file=<path_to_pem_file>

6. Then running flutter packages get resolves the URL and initiates a correct connection.

​	However further version resolving fails for which I will try to open a new issue with some more details.



- debug for properties:
  

flutter not like java having setter method, if we want to debug it, we need to write the setter method.
and set the breakpoint inside the set method.

like:
```
String? _token;

set token(passtoekn){

_token = passtoekn;

}

String? get token {

return _token;

}

```

- Stateless to Stateful:

	Android Studio:

		Mac: option + enter
		
		Windows: alt + enter


	Visual Studio Code:
	
		Mac: cmd + .
	
		Windows: ctrl + .









## Dart

name for the dart file:

since the dart file can have more than one class in it.

so the name for dart file will accord to the which class inheritance to the Widget (StatefulWidget)





import,export:

custom define lib can use both import and export in lib entry file;

like firebase_analytics.dart, this dart file import some libraries that used in this lib.

export some libraries that can be used external class importing this lib.

the difference is import used by current dart file and export used by other dart file which import this dart file.

show is used to restrict which function or class you can access and hide is reverse.





library,part,part of:

library is used to define the library that allow other dart file to import it. and this is entry point for a set of dart file.

you can image the library keyword make this file as entry point of set of dart file, import one using other.



part defines in the library dart file,tell system there another file belong to this library.



part of used in the implementation dart file to relative to part keyword.



e.g:

in flutter package there has a lot of libraries, like widgets.dart and services.dart.

the widgets.dart is a entry point of the library widget.

you can find the widgets directory in the flutter package, under widgets directory there is a set of dart file belongs to widgets library.



Extension methods:

a way to add functionality to existing libraries

define a dart file, NumberParsing.dart:

extension NumberParsing on String {

int parseInt() {

return int.parse(this);

}

}

in another dart file to import and using it:

import 'package:dev/service/NumberParsing.dart';

print('42'.parseInt());



type system:

soundness:

A sound type system means you can never get into a state where an expression evaluates to a value that doesn’t match the expression’s static type.

For example, if an expression’s static type is String, at runtime you are guaranteed to only get a string when you evaluate it.

It enforces that soundness using a combination of static checking (compile-time errors) and runtime checks.

For example, assigning a String to int is a compile-time error.

Casting an object to a String using as String fails with a runtime error if the object isn’t a String.

dynamic and object type:

dynamic type is the type will be confirmed in run time, so it can call any method but there is possible throws the exception.

object type is the root type of any class that does not extend other class, can only call the object type method.

var:

var is a keyword, meaning "I don't care to notate what the type is here." Dart will replace the var keyword with the initializer type,

or leave it dynamic by default if there is no initializer.

Asynchronous:

key term:

1.synchronous operation: A synchronous operation blocks other operations from executing until it completes.

2.synchronous function: A synchronous function only performs synchronous operations.

3.asynchronous operation: Once initiated, an asynchronous operation allows other operations to execute before it completes.

4.asynchronous function: An asynchronous function performs at least one asynchronous operation and can also perform synchronous operations.

flow:

An async function runs synchronously until the first await keyword. This means that within an async function body,

all synchronous code before the first await keyword executes immediately.

when hit the await, return the future type immediately,when the await code finsihed, dart will send it to the event loop for queue.





dart package:

allow a range of versions as wide as possible

what is package:

a Dart package is a directory containing a pubspec file



what is directory:

a directory is physcal location, like /vincent is a directory.



what is pebspec:

The pubspec contains some metadata about the package.

Additionally, a package can contain dependencies (listed in the pubspec), Dart libraries, apps, resources, tests, images, and examples.



what is lib:

each dart file under the package is library.

like below, transmogrify is package, the transmogrify.dart and parser.dart is library

transmogrify/

lib/

transmogrify.dart

parser.dart

test/

parser/

parser_test.dart



how to use the libraries from packages:

using import keyword with package name and lib path -> import 'package:transmogrify/parser.dart';

remember all the library is under the /lib directory.



how to export:

need to say, dart has import and export keyword not like java, and code under package root directory/lib/src is private.

export means other user can only import this file will share all lib export in this file. useful for private code.



developer can import the vincent.dart, after then the class or function of cascade and handler can be used.

vincent.dart.

export 'src/cascade.dart' show Cascade;

export 'src/handler.dart' show Handler;



difference with import and export:

import is used by current class, and export is uesd to share a lot of lib to other class.





conditionally importing and exporting library files:



export 'src/hw_none.dart' // Stub implementation

if (dart.library.io) 'src/hw_io.dart' // dart:io implementation

if (dart.library.html) 'src/hw_html.dart'; // dart:html implementation



explanation:

In an app that can use dart:io (for example, a command-line app), export src/hw_io.dart.

In an app that can use dart:html (a web app), export src/hw_html.dart.

Otherwise, export src/hw_none.dart.



like the debugPrint:

when you import the [import 'package:flutter/material.dart']; you can use the debugPrinte method.

since the material.dart export the widgets.dart.

and the widget.dart export framework.dart.

in the framework.dart export the debugPrint.



package dependencies:

what is dependency:

A dependency is another package that your package needs in order to work.

immediate dependencies and  transitive dependencies:

A dependency that your package indirectly uses because one of its dependencies requires it.

If your package depends on A, which in turn depends on B which depends on C,

then A is an immediate dependency and B and C are transitive ones.



dependency sources:

SDK -> SDK provide (Currently, Flutter is the only SDK that is supported.)

Hosted packages -> downloaded from pub.dev

Git packages -> haven’t been formally released yet so using git link

Path packages -> live version of that package on your local file system



dependency override:

https://stackoverflow.com/questions/59548782/dart-packages-dependency-conflicts

two package refer to same package with difference version, the dependency override can be used.





dart command:

dart pub get:

treat the pubspec.lock as first class, just download the library with version that pubspec.lock provides.

dart pub upgrade:

dart pub upgrade ignores any existing lockfile, so that pub can get the latest versions of all dependencies

flutter pub deps:

-> with --no-dev to hide the dev_dependencies

-> with -s list to display as list  (-s list = -s <style>)

dart pub outdated:

Current:

->  The version used in your package, as recorded in pubspec.lock. If the package isn’t in pubspec.lock, the value is -.

Upgradable:

->  The latest version allowed by your pubspec.yaml file. This is the version that dart pub upgrade resolves to. The value is - if the value in the Current column is -.

Resolvable:

->  The latest version that can be resolved, when combined with all other dependencies.

This version corresponds to what dart pub upgrade gives you if all version constraints in pubspec.yaml are unbounded.

A value of - means that the package won’t be needed.

Latest:

->  The latest version of the package available, excluding prereleases unless you use the option --prereleases.

e.g:

say your app depends on the foo and bar packages, but the latest version of bar allows only older major versions of foo.

The result is that the latest resolvable version of foo is different from the latest version of foo.





versionning:

allow a range of versions as wide as possible



caret syntax ^:

Caret syntax is a compact way of expressing the most common sort of version constraint.

^version means the range of all versions guaranteed to be backwards compatible with the specified version.



For example, ^1.2.3 is equivalent to '>=1.2.3 <2.0.0', and ^0.1.2 is equivalent to '>=0.1.2 <0.2.0'.







## Flutter

hierarchy of type:

a.extends

b.implements

c.with

d.on

these 4 keywordS can be used to class level

Abstract Class can be extends and implements by another class.

normal class can use the extends, implements, and with.

mixin class can use on.



extends no need to overwrite all members (filed and method)

implements need to overwrite all member

with will share the member

on used in mixin type which means the class need to implements or extends with on type class otherwise the class can not use mixin class.

class Client extends MySuper with Mixin {}

Client class need to extend MySuper class if want to use Mixin as the Mixin:

mixin Mixin on MySuper {

void method() {

super.method();

print("Sub");

}

}



component:

1.StatelessWidget has a build method.

2.StatefulWidget has a createState method and needs to create another class that extends State<xxx>

for generic xxx is the custom class extending the StatefulWidget, since the StatefulWidget has a state,

so need another class to represent the state.

3. to use widget property in state class to get property from corresponding StatefulWidget.

4. All layout widgets have either of the following:

A child property if they take a single child—for example, Center or Container

A children property if they take a list of widgets—for example, Row, Column, ListView, or Stack.



navigation:

there is two navigation version, version 1 and version 2.

1.0 simple call Navigator

1.0 can split it to 2 subversion, the base navigator and name navigator.

2.0 is router using more complexity method with page object to control the screen displyaed on app.\

go_router is a declarative router for implement navigation 2.0

there advance native usage:

If you prefer not to use a routing package and would like full control over navigation and routing in your app,

override RouteInformationParser and RouterDelegate. When the state in your app changes,

you can precisely control the stack of screens by providing a list of Page objects using the Navigator.

pages parameter. For more details, see the Router API documentation.

3.0 go_router is first choice for the new app developing





list out several things you can't do with navigator 1.0 ->

1.

you have full control over the route stack and customize how to transition each route. For example, you cannot remove three routes in the middle with the navigator 1.0 API.

you have complete control over what to do when the user presses the android back button. This becomes more promising when you have more than one navigator in the widget tree.

Web use case as you mentioned.

you also have full control over how to parse the initial route. In Navigator 1.0, the initial route is parsed by / and will create a stack of routes, and you cannot update the initial route once it is built.

2.

Although named routes can handle deep links, the behavior is always the same and can’t be customized.

When a new deep link is received by the platform, Flutter pushes a new Route onto the Navigator regardless where the user currently is.

Flutter also doesn’t support the browser forward button for applications using named routes.

For these reasons, we don’t recommend using named routes in most applications.



usage:

The Router and Navigator are designed to work together.

You can navigate using the Router API through a declarative routing package,

such as go_router, or by calling imperative methods such as push() and pop() on the Navigator.





Understanding constraints in flutter layout:

Constraints go down. Sizes go up. Parent sets position.

1.A widget gets its own constraints from its parent. A constraint is just a set of 4 doubles: a minimum and maximum width, and a minimum and maximum height.

2.Then the widget goes through its own list of children. One by one, the widget tells its children what their constraints are

(which can be different for each child), and then asks each child what size it wants to be.

3.Then, the widget positions its children (horizontally in the x axis, and vertically in the y axis), one by one.

4.And, finally, the widget tells its parent about its own size (within the original constraints, of course).



package & plugin:

package:

General packages written in Dart,Some of these might contain Flutter specific functionality and thus have a dependency on the Flutter framework,

restricting their use to Flutter only.



plugin:

A specialized Dart package that contains an API written in Dart code combined with one or more platform-specific implementations.

simple word, write the dart code using MethodChannel to call on the platform side,

the way of plugin works on Android/IOS is that there is some code, written in Java/swift,

that registers a MethodChannel on the Android/IOS side. The MethodChannel waits for method calls.



the type of the plugin:

1. method channel -> using method channel to communicate from app to platform side.

2. Federated plugins -> split the platform to difference package.



find the plugin in the native:

You can find the plugin in the Flutter Plugins

-> go to the plugin you have depned on like firebase_analytics-9.3.5

-> find the flutter FirebaseAnalyticsPlugin



addPostFrameCallback will be used when the init function call the .of method:

all the .of() which means will call to find the widget tree need to be inovked after the init method finished.

like  WidgetsBinding.instance.addPostFrameCallback((_) async { FrontendContext.of(context)!.isNewCustomer = false}







## Firebase

Flutter firebase:

https://firebase.flutter.dev/docs/analytics/overview





Dynamic Links:

the dynamic link is used for redirect to App or go to the website if user using the desktop broswer to open it, treat on all platforms such as Android, iOS and web in a similar way.

transits users from your mobile website to the equivalent content within your app (if the user has not installed your app on her/his device,

the content would be shown after app installation).



tools: https://mxtoolbox.com/ to check the domain.

1. we need to register a domain.

2. give this domain to firebase let it to take over it.

2.1 go to the firebase ->  Build -> Hosting -> Add custom domain

2.2 firebase -> Engage -> dynamic links -> new dynamic link

2.3 firebase may ask you to add one more DNS(txt) reslover to let it know it is ownd by you.

3. after the link is verified, you can set the link behaviour

3.1 Set up your short URL link -> customize a short link. like : https://click.ysi.bz/TG78

3.2 Set up your Dynamic Link -> the real link when user using desktop: https://www.yesstyle.com/en/home.html (fallback url)

3.3 Define link behavior for Apple -> when user using iOS to open the link without install the app, that will goto the app store page.

3.4 Define link behavior for Android -> when user using Android to open the link without install the app, that will goto the google store page.

4. the link open in android with app installed.

4.1 AndroidManifest.xml

4.2 there are two types link for android and two types link for ios.

4.3 deep link and app link

4.3.1 the deep link using self-defined scheme. the drawback is that can be used by other app.

which means other apps can register same schema, when user open this schema will have a dialog to choice in multiple app selection.

4.3.2 the web link likes deeplink but using the http or https schemes not self-defined schemes.

4.3.3 the app link is web link but has atuo verified attribute that would be set your app as a default handler. plus a hosted file - assetlinks.json.

4.4 Custom URL schemes and Universal Links

4.4.1 Custom URL schemes can have... any custom scheme and there is no host specificity,

nor entitlements or a hosted file. The downside is that any app can claim any scheme

4.4.2 Universal Links only work with https scheme and require a specified host, entitlements and a hosted file - apple-app-site-association.

4.4 build the android app google will retrieve information from https://click.ysi.bz/.well-known/assetlinks.json

generated by firebase once your domain verified to check and bind the domain to your app.

4.5 there is a ton of config in AndroidManifest.xml that set the schema path in the app link section, clicked link match this pattern will call back our flutter app.

```
4.6 MainScreen#startInitialLoadingTimer -> initUniLinks will do the job to parse the deep link.
```
4.7 the history of those type of link

Android and iOS both have two types of links for app-to-app or web-to-app communication:

deep links and app links for Android, and custom URL schemes and universal links for iOS.

Both platforms also support dynamic links. Here's a chronological explanation of each type and why they were invented:

1. **Custom URL Schemes (iOS, introduced in iOS 2.0, 2008):** Custom URL schemes were the first method of deep linking in iOS apps.

They allow apps to define a unique URL scheme (like `myapp://`) that other apps or web pages can use to link directly to content within the app.

However, they have a significant limitation: there's no way to verify the ownership of the URL scheme, so any app can claim any scheme,

leading to potential conflicts.



2. **Deep Links (Android, introduced in Android 1.0, 2008):** Similar to custom URL schemes on iOS,

deep links on Android allow apps to register to respond to certain URL patterns, enabling other apps or web pages to link directly to content within the app. However,

like custom URL schemes, deep links don't provide a way to verify the ownership of the URL, which can lead to potential security issues.



3. **App Links (Android, introduced in Android 6.0, 2015):** To address the limitations of deep links, Android introduced App Links.

App Links allow an app to designate itself as the default handler for its web domain, provided it can prove ownership of the domain.

This is done by adding a Digital Asset Links file to the web domain that links it to the app.

This provides a more secure way of linking to content within an app from the web or other apps.



4. **Universal Links (iOS, introduced in iOS 9.0, 2015):** Universal Links are Apple's equivalent to Android's App Links.

They allow an app to open web links (https://) directly instead of opening them in a browser,

provided the app can prove ownership of the domain by placing an Apple App Site Association file on the web server.

This provides a more seamless and secure user experience than custom URL schemes.



5.**Dynamic Links (Firebase, introduced in 2016):** Dynamic Links are a Firebase service that works on both Android and iOS.

They provide more advanced features than the native linking methods,

such as the ability to survive the app installation process and to change behavior depending on where they're opened.

They're often used for things like promotional campaigns, sharing content from within an app, or deep linking to a specific part of an app.



As for web links, they are the standard URLs (like `https://www.example.com`) that you use to navigate the web.

They've been a fundamental part of the web since its inception, and they're what all these app linking methods are based on.

The reason these different types of app links were invented was to provide a way for apps to participate in the web ecosystem by allowing links to point to content within an app,

just like they can point to content on a web page. Over time,

these methods have evolved to provide better security and a more seamless user experience.



5. for iOS it is a universal link, same logic with andorid.

https://click.ysi.bz/.well-known/apple-app-site-association

6. for iOS, xcode need to add the link path to Asscoiated Domains in the Signing&Capabilites in Xcode.

7. if the universal link not work, it is possible that the .well-known/apple-app-site-association has been blocked by security team.





GA4:

Background:

Since Google will terminate Google Analytics in June 2023, it is necessary to replace Google Analytics with GA4.



tech:

web:

GA4 Web via Google Tag Manager

app:

GA4 App, AKA Firebase



terms:

1. dimension:

A dimension is an attribute of your data. It describes your data and it's usually text as opposed to numbers.

An example of a dimension is Event name, which shows the name of an event that someone triggers on your website or application

2. metric:

A metric is a quantitative measurement, such as an average, ratio, percentage, and so on. It's always a number as opposed to text.

One way to think about metrics is that you can apply mathematical operations to them.

An example of a metric is Event count, which shows the total number of times an event is triggered.



debug:

ga4 debugview can be turn on to trace the event.



code:

1. analytics.setCurrentScreen can be used to set the firebase_screen

2. analytics.setDefaultEventParameters pass the map to set for each event if you not overwrite it.

3. analytics.setUserProperty used to set the properties for current user.

4. limitation

4.1 only firebase provide event can used the array type parameter.

4.2 we can pass more non-array type parameter to firebase with overwriting method privided by fireabse, that we can have the array type parameter and custom parameter.





monitor:

using dSYM to analsyt the app crash.

1. download the dSYM file in xcode

2. Window -> Organiser -> select archive (right click) -> show in finder -> right click archive in finder -> Show Package Content -> dSYM -> (app name).app.dSYM

3. go to firebase console -> Crashlytics -> dSYMs

4. upload the dSYM zip to firebase console.

5. after 10 minutes the crash report will be shown in firebase console.







## structure of IOS and Android in flutter project

Modular:

1.lib folder is used for write down dart code.

2.ios folder is used for IOS module

3.android folder is used for android module



package management:

1.dart using the pubspec.yaml -> project root path

2.android using the gradle. -> andorid/app/build.gradle

3.ios using the cocoapod. -> ios/Podfile

3.1 pod file will download the lib from cocoapod and create one more folder called pod contains the plugin.

3.2 Runner.xcodeproj is a project, and Runner.xcworkspace is a workspace contain many project, as the ios may need more than 1 project to run, so it need workspace.



flutter plugin:

1.we may have our own plugin to communicate with native platform, in this yesstyle project will place on frontend_packages.

2.every plugin may have android, ios and lib folder relative to their own platform.

2.1 flutter platform should a class that using method channel to invoke native code.

3.for the flutter plugin, the pubspec.yaml is used to descript the plugin location for each platform in this library.

3.1 the pubspec.yaml like a interface that flutter coe will use the channel to invoke the native code.

4.as every time using [flutter build ios] will clean the pod folder, the pod folder has the config to indicate the plugin should use for that lib,

we may need to re-config all 3 OracleCXResponsys plugin.

4.2 if we do not solve this problem, there will be a problem with using fastlane.

4.1 to avoid this problem, we must config the Podfile to include the OracleCXResponsys plugin automatically.





## flow

socail login:

1. user click the social login icon (like paypal) will invoke the app-rest/social-login/v1/social-login-request-filter-url/socialLoginProviderTypeId

2. after step 1, the webview for that social media will display.

2.1 there are using the flutter _flutterWebviewPlugin.onProgressChanged.listen to listen the change.

3. user input inforamtion in that webview and process will get back to our app with the user inforamtion.

3.1 after input, the trimCookies["slt"] and trimCookies["ascvc"] will return to listener. can use _flutterWebviewPlugin.getCookies().then to retrieve cookies.

3.2 we use this to send the data to backend in step 4.

4. app will send that user information to our backend with the link app-rest/social-login/v1/process-social-login

5. after step 4, the app will navigate to member conncet page. in this page will show you to chose new to yesstyle or already a member.

6. this will determine which link should be calling , app-rest/checkout/social-login/v1/member-connect or app-rest/checkout/social-login/v1/non-member-connect

6.1 SocialSignInForm.dart is for already a member

6.2 SocialSignUpForm.dart is for new to yesstyle









# Code Design For Client Side(Web)



## configuration

A. Installation:

- node.js, ref.: https://nodejs.org, type "node --version" to vertify the installation of the node

- For window, DOSKEY is required.



B. Directory Structure:

input               Define the input location of the sources to minify

input/scripts       For Script

input/style       For Script

output              Define the output location



C. Let get start:

1. In build.js, define the mainConfigFile for the angular js application, e.g. input/script/config.js, change further if in need

2. For Window, the step are as follows:

-> Open CMD

-> Go to the directory, in which contain "r.js", e.g.: D:\thomas\dev\frontend\workspace\v3-yesstyle\yesstyle-war\src\main\webapp\minify\input

-> Type "DOSKEY r.js=r.js.cmd $*"

-> Type "node r.js -o build.js", the follow result is ecpexted.

Optimizing (standard.keepLines.keepWhitespace) CSS file: D:/thomas/dev/frontend/workspace/v3-yesstyle/yesstyle-war/src/main/webapp/minify/output/style/rmaLabel.css

Uglify file: D:/thomas/dev/frontend/workspace/v3-yesstyle/yesstyle-war/src/main/webapp/minify/output/scripts/browse.js

Uglify file: D:/thomas/dev/frontend/workspace/v3-yesstyle/yesstyle-war/src/main/webapp/minify/output/scripts/config-dev.js

Uglify file: D:/thomas/dev/frontend/workspace/v3-yesstyle/yesstyle-war/src/main/webapp/minify/output/scripts/config.js



style/rmaLabel.css

-> You can find the transformed result in the directory "output"



3. For Linux, TODO







## CSS

copy the CSS from the browser fetch file to the same CSS file in our working directory can verify display issues that show incorrectly.

this is may cause by the UI team forgetting to upload the CSS file only upload scss file.

like v3_megamenu.scss



css debug:

1.using chrome inspector[F12], and go to element

2.select the element you want,there is a style section

3.tick and untick the style will reflect the change to the browser immediately

4.find your style, and click the style file can redirect to the css file.







## Javascript

god part:

scope:

for JS before ES6, there only has function scope or global socpe, until ES6 you can use the let or const keyword to make the variable becomes block scope.

so we can declare a variable with keyword var inside if statement but using it outside of block.

hoist:

Hoisting is JavaScript's default behavior of moving declarations to the top.

so we can use the variable before declared



JS location:

DEV & UAT ->

```
for remove item the file is v3-yesstyle\yesstyle-war\src\main\webapp\scripts\shoppingbag.js#$scope.deleteBasketItem
```
warmup & PROD ->

split the js and html, and using CDN to load the JS file.

the JS file is in https://ddvql06zg3s2o.cloudfront.net/Assets/res/p/3065/scripts/shoppingbag.js

methodology:

method-1:

chrome -> F12 -> Elements -> select the element you want to find with event -> Event Listeners ->

uncheck Ancestors -> the event and corresponding JS file will be shown -> click the JS file ->

if the event is in the Angular file, our customize JS should be in the same father directory.

search the method name with the element bound. the actually function is locate on it.

p.s since the Angular event is a dispatcher or a entry point, so we can not locate to extractly bound function directly.

method-2:

if you know the function name, chrome -> F12 -> Network -> enter control+shift+f -> input the function name you want -> will display the js file.

find the function name if you do not know it.

chrome -> F12 -> element -> select the element you want to track there will have a attribute like [ys-ge-click], break hyphen to ysGeClick as keyworkd

and global search in the js flie.you can find the directive as a handler to handle this tag.



debug:

find the remove button -> using in chrome console

1.btn = $('.actionWrapper').children[1]

2.btnlisener = getEventListeners(btn)

3.debug(btnlisener.click[0].listener)

4.btn.click()







## AngularJS

Background:

the website is using Angular1.0 to write the JS logic.

the angularJS is not equal to angular. the angular is whole frontend part and angularJS just a scripts is more or less jQuery.



Structure:

the app.js file is JavaScript file in which I created an instance of an Angular module,

the common.js is a JS file that include the common event that handled by angular.

The controller.js Javascript file has an Angular controller that is registered with the app.js



in the config.js can find the path of Angular lib file.

build.js is used to build the JS which contain the config.js file.



flow:

1.there is a binding mechanism from HTML element to JS code ->

when we create class attribute like ys-Points-Giveaway-Result-Dialog in the view page (HTML,in this project will use wicket to do this job)

if our app.js file has a directive named ysPointsGiveawayResultDialog, the angular will bind the element containning specify attribute to this JS logic if the restrict: "A" or all.

in the directive scope we can get the object, properties or something else that angularJS provides to us.

we can use this context to write down our JS logic, like controller the controller

2.if we are using the $scope.property not in the angular scope and update this property with angular way like $scope.property = xx, we need to use the $scope.$apply for updating the DOM

3.link function in directive is used to register a listener to the DOM.

3.1 find the example in app.js  app.directive('ngTimer'.. when document.getElementById("luckydrawTimer");  inovked, the link function will be called.

3.2 the attribute countingDown is changed also call the link function in app.directive('ngTimer', since the element being shown after countingDown set as true with ng-if

4. even we add the attribute to html, the angular still not delegate it, check the angular logic.

4.1 for my case, even we add ys-ge-click in html, the ysGeClick directive still not delegate it, so add the condition to it.

like if (!($scope.geData || $scope.mappData || $scope.oiData)) to (!($scope.geData || $scope.mappData || $scope.oiData || $scope.ga4Data))

add one more scope ga4Data : "@"

scope: {

geData: "@",

mappData: "@",

oiData: "@",

ga4Data: "@"

},

5.some request will automatically send to server. (can refer to GA4 pahse4)

5.1 On the search listing page, when you enter a keyword and select a department such as beauty, an additional request is made to call the RESTful endpoint using AJAX.

5.2 If you want to trace in this case, you should locate the network tab and find the URL. Then, navigate to the initiator where the call stack will be displayed.

5.3 If the call stack is not helpful, you should consider the request URL's origin or location.

5.4 To find the URL value, I search for it in the listing element using either the department ID or a keyword like "search" in the URL.

5.5 The ysApp.browse object will be created in the MainContent.

5.6 In the network tab, you can perform a global search for ysApp.browse to identify which JavaScript file to use. One such file is browse.js.

5.7 When you break it down, you will understand why the local environment automatically sends the request while production does not.

```
5.8 The reason for the refresh is that when a string #/xd_co_f=Zjc0OWE0ZGUtMDYyMC00ZmU3LWFjZDAtN2ZkZTVhMTBkYmVl~ appears at the end of the URL, it triggers a logic to refresh the page.
```
6.The HTML code calls the RESTful endpoint and get JSON data.

6.1 like pointJsonData

6.2 Embed the URL in the 'ys-account-point-update-url' attribute.

6.3 Use the directive "ysaccountpointupdateurl" as a handler for this tag in AngularJS.

6.4 When the page loads, the link function in the directive will be called.

6.5 After receiving the JSON response from the server, the link function will assign each field's result to its corresponding HTML element.





coding:

Module = whole application using ng-app to define

Controller = under the directive, every item will be iterated and call back.

Directives = built in or custom:

built in like ng-app, ng-init, ng-model

custom like w3TestDirective, in HTML is <div w3-test-directive>

we can use controller in directive :  controller : function($scope)

the reason is we can reduce the control scope.

Services = is a function can be called in angular application of HTML like {{hex}}

the definition:

app.service('hexafy', function() {

this.myFunc = function (x) {

return x.toString(16);

}

});



design:

1.add the new wicket component and java file to rendering this page

2.using the AttributeModifier in JAVA to control this container is needed managed by angular or not.

3.we can write the JS in app.js file with angular directive with controller to control all the element in this container

4.such as submit form , redirect ...



built in directive:





question:

1. how the app.js will be included to HTML page if there no import or include statement?

in the com/yesasia/yesstyle/web/wicket/panel/script/Script.html, there has the angular bootstrap method to include the app.js

2. link function of directive mechanism?

the link function of directive will be triggered in the element it listen is changed, like from disapear to show.



custom:

commonService





template:

we can use get template method to get the HTML with type="text/ng-template" attribute.

in HTML:

<script type="text/ng-template" id="ysSmartAppBannerId1">

in angularJS:

var template = $templateCache.get($attrs.ysSmartAppBannerId);

we can also config the parameter in HTML:

ysApp.smartAppBannerConfig = { hoursHidden: 1}

and use it in angularJS:

var config = ysApp.smartAppBannerConfig;



e.g

share button

1. we can find the template id = /panel/header/friendsRewards/FriendsRewards.html in inspector.

2. we can also find the /panel/header/friendsRewards/FriendsRewards.html in the java code.

```
com.yesasia.yesstyle.web.wicket.panel.influencerpage.maincontent.MainContent#createShareDialogTemplate
```
3. in this method we will return getTemplateId and createContent

4. the createContent is used to render the html template

5. the html and java will be linked by step above.







## Browser Built-in Object

Notification.permission -> is used to check the web browser has permission or not.







## ccjs browserify

for smart app banner : https://github.com/GabLeRoux/smart-app-banner/blob/e1748e46315daa28bb89ec1b040adc893bd469ed/smart-app-banner.js

if code only run on nodejs, but want to apply to browser side, we need to browserify it firstly.

browserify is do the append all library to one file.

after browserify, we need to do the ccjs to change the commonjs to broswer recognize module syntax.







## nextjs & reactjs

background:

the yesstyle will be migrated to use nextjs and SpringBoot

springboot will provide the service and using restful to communicate

nextjs is framework to hold the reactjs to do the ssr and csr



vscode debug:

method1: this method can not real debug since the unbounded breakpoint issue;

1.open the project with vscode.

2.open the package.json

3.click the debug logo to run the nextjs server.

method2:

1.create .vscode/launch.json at the root of your project

2.and add the content [https://tymick.me/blog/debug-nextjs-with-vs-code],[https://nextjs.org/docs/advanced-features/debugging]

{

"version": "0.2.0",

"configurations": [

{

"name": "Next.js: debug server-side",

"type": "node-terminal",

"request": "launch",

"command": "next dev"

},

{

"name": "Next.js: debug client-side",

"type": "pwa-chrome",

"request": "launch",

"url": "http://localhost:3000"

},

{

"name": "Next.js: debug full stack",

"type": "node-terminal",

"request": "launch",

"command": "next dev",

"console": "integratedTerminal",

"serverReadyAction": {

"pattern": "started server on .+, url: (https?://.+)",

"uriFormat": "%s",

"action": "debugWithChrome"

}

}

]

}

3.Ctrl+Shift+D on Windows

4.run the command you select [Next.js: debug full stack]

issue:

1 can not recognize typescript:

1.may need to install [npm install -g ts-node] if throw the error [return new TSError(diagnosticText, diagnosticCodes)]

2.add the "types": ["node"] in the compilerOptions tag in the  tsconfig.json

3.install next/dev ->

just add "@next/env": "^12.0.7" inside dependencies in your package file or just write [npm install @next/env]

2 debug server side

1.after the nextjs run, we add the breakpoint in visual code, there will be not getting hit.

2.just add space and crlt+s to save the file. the nextjs will complier it again.

3.after refresh the breakpoint will get hitting.

p.s after you modify the index.ts file you need to restart the nextjs.





chrome debug:

0.install the reactjs dev tool extension for chrome.

1.using chrome inspector[F12], and go to Components, search the the element you want

2.click the eye icon[inpsect the matching DOM element], will go the element tab.

3.in the element tab, you can switch to console tab

4.in the console tab, type [$r] will get the reactjs object.



debug find the component:

1. go to the chrome extension store and download [React Developer Tools]

2. after install, go to the page you want to debug.

3. right click the page and inspect it

4. go to the components tab, you can see the component tree.

5. using the arrow icon to select the component you want to locate, the component name will be displayed.



p.s

if there has error lile [The timeout occurred at InspectedElementContextController (chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/main.js:42052:3)]

need to use Incognito mode to open the page. and repeat the step mentioned above.







change the url to local services:

.env.development -> uncomment local and comment uat link.





nextjs login:

1. login in the old framework in the UAT.

2. copy the ysesid in the cookies into nextjs.







reactjs:

reactjs is dividing the html to each component and using jsx to combine it.



for state management there has

React Redux and React Hooks are two different approaches for managing state and side effects in a React application.

React Redux is a popular library for managing state in React applications,

using a centralized store and providing mechanisms for dispatching actions and updating the store.

React Hooks, on the other hand, are a more recent addition to the React library and allow developers to manage state and side effects directly within a functional component,

without the need for a centralized store.

Both approaches have their own pros and cons and the choice between them often depends on the specific needs of the application and the preferences of the developer. However,

with the introduction of Hooks, the use of Redux is becoming less common for simple and small projects, as Hooks provide a more lightweight solution for state management.



what is react hook:

like class component(StatefulWidget), the functional component is StatelessWidget, react want functional to be StatefulWidget, so create a set of hook.



useState -> create a state maintanaced by react hooks

useEffect -> like componentDidMount, componentDidUpdate, and componentWillUnmount combined, to be triggered in these life-cycle of the component

useContext -> The useContext() hook is used to create common data that can be easily shared amongst components without having to pass props manually to each level.

useRef -> is a hook that allows you to create a mutable reference to a DOM element, or any other value, that persists across component renders.

useReducer ->  is a hook that allows you to manage complex state logic in your application by using a reducer function. like useState

useCallback ->  is a hook that allows you to memoize a function, meaning that the function reference will only change if one of its dependencies changes.

useMemo -> is a hook that allows you to memoize a value, will cause the function to only run when needed

memo -> memo will cause React to skip rendering a component if its props have not changed





nextjs:

even react can provide server side rendering but nextjs will be handy to use it

pre-redering in nextjs:

1. one is static redering which will create a static page in build time.

1.1 you can use getStaticProps to tell nextjs to create a static page for this page

1.2 may need to combine getStaticPaths if your routing is dynamic routing like [pid]

2. another one is server side rendering using the hook method getServerSideProps to implement.

2.1 each time user access the page with implemented getServerSideProps, the page will be re-generated in server side

client side:

1. for client side, all above method we do not use will only be client side rendering.

2. to manage the state we will use react hook.





Hydration:

Hydration is a term used in React to describe the process of taking an already-rendered HTML page generated by the server

and "rehydrating" it into a full React-powered app in the browser.





turn off the nextj:

1. add towicketuat to the cookies, and set the value to true.

2. we found this setting in the cloudflare





after nextjs13:

the nextjs will use the server component to render the HTML and send to client side. server component is similar to the PHP







## GTM & GA4

GA4 is the version 4 of the GA used to generate the Analyze report

GTM is google tag manager can be treated as a interface to receive data passed by our server.





Google Tag Manager:

1.evnet -> event includes these 3 aspect

1.1.trigger -> Tags fire in response to events. In Google Tag Manager, a trigger listens to your web page or mobile app for certain types of events like form submissions,

button clicks, or page views. The trigger tells the tag to fire when the specified event is detected.

Every tag must have at least one trigger in order to fire.

1.2.tag -> A tag is a snippet of JavaScript that sends information to a third party, such as Google.If you don't use a tag management solution (such as Google Tag Manager),

then you need to add these snippets of JavaScript directly to the source code of your site. In contrast,

with Google Tag Manager, you no longer need to maintain each of these JavaScript snippets in your source code.

Instead, you specify the tags that you want to fire, and when you want them to fire, in the Google Tag Manager user interface.

1.3.variable -> Variables in Google Tag Manager are named placeholders for values that are populated when code is run on your website or mobile app.

For example, the Tag Manager variable named "Page URL" returns the current web page URL.

Variables are used in both triggers and in tags:

In triggers, a variable is used to define filters that specify when a particular tag should fire.

(e.g.: fire a trigger when the url variable contains “example.com/index.html”).

In tags, variables are used to capture dynamic values (e.g.: pass a transaction value and product ID to a conversion tracking tag).

1.3.1 we can use difference type like (lookup table type) to refer to other value;



1.4 relationship:

when using pushDataLayer with the event name, the trigger will be fired.

which tag reference to this trigger will be run.

there are some parameters used by tag and be recorded.



1.5 GTM debug:

go to workspace you want in GTM and click the preview, will open the dialog input the link you want to debug.

GTM will trigger to open a broswer to you.





2.JAVA class implement:

com.yesasia.frontend.domain.google.analytics4 package.

e.g: Ga4ViewItemEventData, and in ProductPage.java with implementing GoogleTagManagerContext will call it through the GoogleTagManager



3.Js:

dataLayer.push or CommonService.pushDataLayer



3.1 how to trace the button event when using ng-click:

I will use the ng-click="onSaveItem($event); to be a example.

I want to find the the link how to embed to save button in product page:

JAVA part:

1. I am using info.html(pdp) as keyword to global search in intellij with fils mask *.xml

2. you can find the subfix as ysMountPath xml which will contain the bean id.

3. you use this bean id to global search again with fils mask *.xml, tge ysContext-url will show.

4. go the class that pageClass property in xml. that is the PDP class.

5. go to corresponding html, you can see the it include another page, MainContent.java

6. in the MainContentPage.java, there is a logic which add a new Attribute ys-on-save-product-option-url, that is the link onSaveItem will use.

7. the onSaveItem is in the BuyingOptions.java embeded by MainContent.java

JS part:

1. golbal search onSaveItem with *.js, you will find there is a js function or angular directive.

2. it use the $attrs.ysOnSaveProductOptionUrl to get link we put in the step 6 in java part.

3. the attribute ysOnSaveProductOptionUrl will split it to ys-on-save-product-option-url in html.

4. now you can see the actually link the ajax will use.



3.2 the datalayer how to be instantiation:

GoogleTagManager.java will create the datalayer object.

and the createDataLayerKeyValueMapping in the GoogleTagManager.java will init the value.



3.3 how to find the tracking as the feature switch parameter for header:

a. in the YsTemplatePage.java, this class will instant all the needed js.

b. there are Tacking class reciever receives the parameter tracking from fecthing it in the header.

c. if the tracking is true will turn on the element panel.trackingWithCondition in the Tracking.html

d. if turn on, there will be also turn the googleTagManager.

e. in the GoogleTagManager will turn on the datalayer



4. the order confirmation page error:

4.1 since the _log.error(e.getMessage());// _log is null, dont use. so the page will throw the error;

4.2 sql to retrieve data:

select tt2.shopperid,tt2.shopperemail,tt2.tt2cout ordercount,tt2.tt2order ordernum,tt3.total,tt2.tt2create create_datetime from

(

select yo1.shopper_id shopperid,email shopperemail,count tt2cout,yo1.order_num tt2order,TO_CHAR(yo1.created_datetime,'MM/DD/YYYY HH24:MI:SS') tt2create from ya_order yo1  join  (

select yo.shopper_id shopper,count(1) count,max(ys.email) email,max(yo.order_num) ordernum  from

ya_order yo left join ya_shopper ys on yo.shopper_id = ys.shopper_id where yo.created_datetime > TO_DATE('08/24/2022 07:30:00','MM/DD/YYYY HH24:MI:SS')  and  yo.created_datetime < TO_DATE('08/25/2022 09:00:00','MM/DD/YYYY HH24:MI:SS')

group by yo.shopper_id having count(yo.shopper_id) >1

) tt1 on yo1.shopper_id = tt1.shopper where  yo1.created_datetime > TO_DATE('08/24/2022 07:30:00','MM/DD/YYYY HH24:MI:SS') and  yo1.created_datetime < TO_DATE('08/25/2022 09:00:00','MM/DD/YYYY HH24:MI:SS')

)tt2

join

(select sum(ol.unit_price) total, oi.origin_order_id orederid from order_info oi left join order_line ol on oi.id = ol.order_info_id

where  oi.origin_order_id in (select to_char(yo1.order_num) from ya_order yo1  join  (

select yo.shopper_id shopper,count(1) count,max(ys.email) email,max(yo.order_num) ordernum  from

ya_order yo left join ya_shopper ys on yo.shopper_id = ys.shopper_id where yo.created_datetime > TO_DATE('08/24/2022 07:30:00','MM/DD/YYYY HH24:MI:SS')  and  yo.created_datetime < TO_DATE('08/25/2022 09:00:00','MM/DD/YYYY HH24:MI:SS')

group by yo.shopper_id having count(yo.shopper_id) >1

) tt1 on yo1.shopper_id = tt1.shopper where  yo1.created_datetime > TO_DATE('08/24/2022 07:30:00','MM/DD/YYYY HH24:MI:SS') and  yo1.created_datetime < TO_DATE('08/25/2022 09:00:00','MM/DD/YYYY HH24:MI:SS') ) group by  oi.origin_order_id

) tt3

on tt3.orederid = tt2.tt2order;



4.3 retrieve sku:

select order_num, listagg(data, '') within group (order by shopper_id) as order_detail from (

with ox as (select shopper_id, created_datetime, order_num, order_xml from ya_order where order_num in (18930521

))

select shopper_id, created_datetime, order_num, regexp_substr(order_xml, '<sku>(\d)*</sku><quantity>(\d)*</quantity>', 1, level) data from ox

connect by level <= REGEXP_count(order_xml, '<sku>(\d)*</sku><quantity>(\d)*</quantity>')

)

group by order_num;



5. tag, variable, trigger:

5.1 varibale can be normal and customer js.

5.2 the customer js will be ran when the page is loaded if the page include the GTM container tag.

5.3 in common.js, there has a function named basketItemService.add, will push the event to GTM.



6. gtm Preview

6.1 we can use the gtm preview to check the data sent to GTM.

6.2 in the preview page there will have GTM receive data and the tag that will send to GA4.

6.3 like GTM-W5P9CP is the tag receiving the data from yesstyle websie

6.4 G-YM4H18NKQM is the tag sending data to GA4.









# Test Case

## reference

MyAccountDaoTest.java for run the unit test

MyAccountDaoTest.xml import data when Junit test run.

MyAccountServiceImplPowerMockTest or EventServiceImplTest or YsAppRestResourceServiceTest or MyAccountServiceImplPowerMockTest is used to mock the behavior of the service layer.







## testcase design

create my own enum test case:

e.g.

using BackToSchoolPromotionPeriod as example. and can refer to com.yesasia.rainbowfish.util.constant.AdventCalendarProductPeriodTest as a reference.



create my own DAL testcase:

e.g.

1. add the table creation SQL in 001_initial.sql file

2. do not create a table in SQL developer before test case run. the test java will run itself and read 001_initial.sql to recreate the table if missing.

and there is needed to drop the table after the table field was changed.

3. the AppReviewDaoTest.xml is used to generate data before testcase run, so we need to write down it.

4. create the test.java in test\com.YesAsia.angelfish.dao.hibernate

5. annotation is needed to run the test case like @DataSetBeforeAllTests and @RunWith(UnitilsJUnit4TestClassRunner.class)

5. using Assert class to verify the result

6. for the persisting method you need to persist it before retrieving the data.



p.s

refer to AppRateFeedbackDaoTest

the path ->

create the file like: D:\vincent\dev\frontend\workspace.intellij\angelfish\angelfish-dataaccess\src\test\resources\com\yesasia\angelfish\dao\hibernate\AppRateFeedbackDaoTest.xml



@Transactional(TransactionMode.COMMIT) is used to commit the insert since the test case is the default for rollback.

in import org.unitils.database.annotations.Transactional;



create my own BLL testcase:

using powerMock

e.g

1.create servics implementation test

2.add the annotation to class @RunWith(PowerMockRunner.class) and @PrepareForTest(AppReviewServiceImpl.class) is must

3.write down the method that using mock test



what is mock ->

pretend to call the taget method but actually not call

why using it ->

1.some method we can not call directly, mock can help me to pretend to call and set the return result.

2.sometimes we only wanna know BLL method is calling to DAL method or not and the return result is same with expected or not.

ps: 1.need to overwrite the equal method, otherwise will throw the Unexpected method call expected: 1, actual: 0  excpeiton

the reason is expected method was inovked but the argument was not equal

2. or using EasyMock.anyObject();//same class but difference object

3. or using PowerMock.expectNew(AppRateFeedback.class).andReturn(appRateFeedback); which means mock the service layer create a new object.



run command line with Maven:

switch to the module folder and run below command. like D:\vincent\dev\frontend\workspace.intellij\frontend\frontend-core

mvn test -Dtest=CouponServiceImpl_IT_dev

ps:

need to edit 001_initial.sql after dropping the table, since this can be detected by DButil and recreate schema again.







## mocktest methodology

1. what is a mock test, the mock test is we do not want actually call the real method in this case the mock test is a good choice.

1.1 like we have written down the DAO unit test already so for the service layer we do not need to call DAO again, in this case, we can mock the DAO.

1.2 for code Coverage some code Snippets can not reach like catch block, in this case, we can use the mock test to Simulate the exception.

1.3 controller layer can not be called directly we can use a mock test to do that.

2. mock test just believes the return value you set other than the need to know the actual return value of the invoked method.

3. there are two-stage, the recording stage and the replay stage.

3.1 for the recording stage we call the  PowerMock.expectLastCall()  for recording the last method behavior.

3.2 if the method has a return value using the PowerMock.expectLastCall().andReturn for telling mock tool the value the method returns.

3.3 for the replay stage, all the methods above this call will be Simulated.

3.4 after the replay stage you can verify the method written down below the replay stage,

the mock tool will compare the method written down below the replay stage to the method above the replay stage to check the method is actually invoked or not.

like we mock one service layer method is calling two other methods, we need to mock these two methods to tell mock tool the service method is calling these two.

if the service layer method did not call one of two will throw the exception like expected: 2, actual: 1

4. if the method being called is in the same layer(service layer) we just need to mock the other layer method if the method finally calls another layer method.

```
Service_layer#a -> Service_layer#b -> DAO_layer#a
```
```
test case only need to pretend to call DAO_layer#a method rather than the Service_layer#b if we want to mock the Service_layer#a
```
5. using assertReflectionEquals to assert the result since the assertReflectionEquals will print more information such as which method is redundancy.







## mocktest issue

1.CmsBlock.getLang(YS, English): expected: 1, actual: 2 -> expected means how many times we want to call via mock, actual means the real method call how many times.

1.1 means the call count is not correct. e.g: the service call 2 times Dao, but we mock 1 time.

1.2 the argument is not the same between the expected result and the actual result. so the mock tool does not recognize to include this invocation



2.java.lang.NullPointerException ->

2.1 PowerMock is unable to match for the parameter types. You can explicitly tell the parameter types

since we call Whitebox.invokeMethod with assgining null parameter to it, so when it calls the isAssignableFrom will throw null NullPointerException

like -> Whitebox.invokeMethod(mockTested,"validateDisplay",new Class<?>[]{PriceDisplayContext.class,Double.class},priceDisplayContextInNull, priceInNull)

2.2 the DAO mock class did not assign to the Service tested class.

2.3 the return type of the mock call is not correct. like -> PowerMock.expectLastCall().andReturn(site);

2.4 mock object can not be set the value to it, mock object gets the value still null after we set this value to this mock object.

we should use the getFiled() and return the expected result to solve it.

like ->

Foo mockedFoo = PowerMock.createMock(Foo.class);

mockedFoo.setName("test");

String name = mockedFoo.getName(); // still null.

->

Foo mockedFoo = PowerMock.createMock(Foo.class);

mockedFoo.getName();

PowerMock.expectLastCall().andReturn("test").once();

e.g ->

CmsBlockAppTitleDisplayerTest.testDoDisplayer2()



3.junit.framework.AssertionFailedError ->

the object is not the same, so we need change the same object for assertReflectionEquals method.

like -> BrandServiceImplPowerMockTest.testIsBrandIpBlocked



4.org.powermock.reflect.exceptions.TooManyFieldsFoundException: Two or more fields matching type ->

since there has more than one same declaring type in same class, so we need to specify the field name for it.

like -> Whitebox.setInternalState(tested, "m_yaExchangeRates",expectedYaExchangeRates);



5.java.lang.IllegalStateException: missing behavior definition for the preceding method call ->

the error means omission of a return value specification (andReturn(...)).

you call the mock method, but did not give the return value but tested method actually has return value;

5.1 check the return value for mock is missing or the target method has the return value.

5.2 check the replay() has been called or not.

5.3 using the same mock tool to make the return value, you can not use PowerMock to create the object but use EasyMock to test.

5.4 for my case, the MyAccountServiceImplUnitilsTest.doTestPersistShopper() is wrong object for mock.

remember the principle of the mock is pretending to invoke the method which is inside in target method.

e.g MyAccountServiceImplUnitilsTest.testPersistShopperGrantBirthdayBonusTrueWithResult()



6.java.lang.IllegalArgumentException: wrong number of arguments ->

check the method is eat such number arguments



7.junit.framework.AssertionFailedError: Expected: false, actual: true ->

the assert result is not correct



8.for the static method we need to use @PrepareForTest(DateUtils.class)

and mock it in the method -> PowerMock.mockStatic(DateUtils.class);

```
e.g CouponServiceImplTest#testGetToBeExpiredInfluencerCoupons
```


9.for thoes Unexpected method call xxxx like DepartmentDao.getDepartments([1]) ->

9.1 the tested method is calling some methods but our mock did not pretend to call, for this case we need to mock that method call.

9.2 the parameter is wrong between mock and actually call, for this case, we also need to mock the parameter that passes to the real object.

if the real object is done by itself we can not pass the parameter, we also can mock that by following the real object retrieve parameter step.

```
e.g CouponServiceImplTest#testGetToBeExpiredInfluencerCoupons
```


10.Powermock java.lang.IllegalStateException: no last call on a mock available

did not create the mock object but used the last call method of the mock tool.

Create a mock object through the mock tool.







## testcase file

hibernate:

D:\vincent\dev\frontend\workspace.intellij\angelfish\angelfish-dataaccess\src\test\resources\angelfishContext-dataaccess-test.xml

property:

D:\vincent\dev\frontend\workspace.intellij\angelfish\angelfish-dataaccess\src\test\profiles\dev\unitils-angelfish-dataaccess-test-local.properties

property for getting the userName and password setting:

the username and password refer to dev segment in maven setting file.

property file for testutil get username and password:

D:\vincent\dev\frontend\workspace.intellij\angelfish\angelfish-dataaccess\src\test\resources\unitils.properties

class for read the username and password:

ConfigurationLoader.loadConfiguration()







## test case fix

using cobertura to generate a report that will show the code Coverage for each class.

1. Line Coverage: The percent of lines executed by this test run.

for Line Coverage, we need to write the test case that can cover(run) all lines of the target class.(not include true/false)

2. Branch Coverage: The percent of branches executed by this test run.

for Branch Coverage, we need to write the test case that can cover(run) all the if-else branches.

3. Complexity: Average McCabe's cyclomatic code complexity for all methods.

This is basically a count of the number of different code paths in a method

(incremented by 1 for each if statement, while loop, etc.)



report generation:

1. using cobertura to generate the report need to run the mvn:site(or using IntelliJ UI) on the modules and do not set skip test.

2. the path for angelfish, e.g: D:\vincent\dev\frontend\workspace.intellij\angelfish\angelfish-dataaccess\target\site

3. open the index.html in the step 2 path.

4. expand Project Reprots -> Cobertura Test Coverage -> com.yesasia.angelfish.dao.hibernate -> can check all the code Coverage.

5. select the class you want to check, the hint with which branch does not cover will be shown.







## test case running error in intellij

Command line is too long. Shorten command line for xxx or also for Application default configuration.



1.go to the Eidt Default configuration of this test class.

2.select the classpath file in the shorten command line.









# Database



## account

oracle:

cloud uat:

URL: 172.17.7.201

port:1521

username:V5_WEB_YSV2

password:mN2sE8ke

service name: v5



dev:

old->

URL: 192.168.123.82

port:1521

Oracle username: vincent_chan

The default password for the accounts: a1i2s3a

service name: yadev

new->

URL: 172.17.8.96

port:1521

Oracle username: vincent_chan

The default password for the accounts: a1i2s3a

service name: clouddev



cloud PROD:

URL: yaysprod-db-1.awsprodoraclecluster.yawin.yesasia.com

port:1521

Oracle username: vincent_chan

The default password for the accounts: a1i2s3a

service name: v5



postges:

host: yays-uat-fe-postges-01.cgizl13e8gxf.ap-east-1.rds.amazonaws.com







## schema

Mysql 						Oracle

Mysql server				server instance or database

DataBase					schema

table						table





shopper table:

ya_shopper



001_initial.sql needs to be updated after adding a new field or a table.







## show schema

since we do not have full access right in UAT and Prdo, we can not using UI to check the schema

but there is one skill to workaround.

1.open the sql developer

2.click the Find DB object.

3.we can using dropdown list to choose which DB we want to inspect

4.tick the All schemas

5.input the table name we want to inspect, need double quotes.







## DDL

table creation:

1. create a new Bugzilla which assign to the IT database team

2. the component select object modification

3. summary is the title for adding a new table. like: Create table YA_APP_RATE_FEEDBACK on DBSNAP(DBSNAP or YARAC)

4. the description is needed to attach the create table SQL and mention create in which DB.

Hi Team,

Would you please help to create a new table YA_APP_RATE_FEEDBACK in DBSNAP only?



i.e.

CREATE TABLE YA_APP_RATE_FEEDBACK (

id             int                NOT NULL PRIMARY KEY,

shopper_id     VARCHAR2(32 BYTE)  NULL,

token          varchar2(1024)     NOT NULL,

site_id		   int                NOT NULL,

create_dt      DATE               NOT NULL,

mod_dt         DATE               NOT NULL,

app_comment    nvarchar2(500)     NULL

);



CREATE SEQUENCE SEQ_YA_APP_RATE_FEEDBACK

START WITH     1

INCREMENT BY   1

NOCACHE

NOCYCLE;



Thanks,

Vincent

5.add cc to frontend team with Show Advanced Fields. the frontend email is f-ya-frontend@yesasia.com



e.g:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=91465 -add table



p.s

ask for create new table before code ran on production.





table alter(add new column):

1. create a new Bugzilla which assign to the IT database team

2. the component select object modification

3. summary is the title for adding a new field. like: Add a new nullable field att_status to table ya_app_api_token

4. the description is needed to attach the alter table SQL and mention alter in which DB.



Hi Team,

Could you please help to add a nullable field 'in_app_rating_answer' to

'ya_app_api_token' in DBSNAP only?

i.e.

in_app_rating_answer          varchar2(255)   NULL

or

alter table ya_app_api_token add column att_status_id ??? null;



5. add cc to frontend team with Show Advanced Fields. the frontend email is f-ya-frontend@yesasia.com



e.g:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=85361 -add field

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=90978 -add field

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=92666 -add field

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=93770



https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=97241 -insert Data

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=97589 -update Data

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=98125 -update Data

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=101257 -update Data



p.s

ask for alter production table before code ran on production.



cc email:

abby.chan@yesstyle.com, f-ya-frontend@yesasia.com, sykeung@yesasia.com



Data synchronization:

link for the request to sync assets data from PROD to UAT:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=84178

link for the request to sync help-topic data from PROD to UAT:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=63364







## sql

create table:

CREATE TABLE ya_app_review (

id             int           NOT NULL,

shopper_id     varchar2(72)  NOT NULL,

create_dt      date          NOT NULL,

mod_dt         date          NULL,

app_comment    varchar2(255) NULL

);

ALTER TABLE ya_app_review

ADD CONSTRAINT ya_app_review PRIMARY KEY(id);



check table is created:

select * from ya_app_review;



add data:

insert into ya_app_review (id,shopper_id,create_dt,mod_dt,app_comment)

values

(1,'123456',sysdate,null,'test')



check DB character set:

Varchar ->

SELECT

*

FROM

nls_database_parameters

WHERE

parameter = 'NLS_CHARACTERSET';

NVarchar ->

SELECT

*

FROM

nls_database_parameters

WHERE

parameter = 'NLS_NCHAR_CHARACTERSET';



get all store procedured and function:

SELECT * FROM ALL_DEPENDENCIES

or

SELECT * FROM all_procedures



show table belong which schema:

select table_name from all_tables

OracleCXMobileSDK

select owner, table_name from all_tables where table_name like '%REFUND_%'



get the creation table statement from existing table:

select dbms_metadata.get_ddl('TABLE','billing_info','BACKEND_ADM') from dual;



check timezone:

select DBTIMEZONE from dual;



paganation:

select rownum rn,mycount,mydate from (select count(1) mycount,to_char(created_datetime,'yyyy-mm-dd') mydate

from ya_order group by to_char(created_datetime,'yyyy-mm-dd') order by to_char(created_datetime,'yyyy-mm-dd') desc) WHERE rownum <= 50;



SELECT *

FROM (

SELECT t.*, ROW_NUMBER() OVER (ORDER BY expiration_date DESC) rn

FROM ya_coupon t

WHERE percentage_coupon_value IS NOT NULL

)

WHERE rn BETWEEN 11 AND 20;





check db timezone:

select DBTIMEZONE from dual;





get order count:

SELECT mycount,

mydate

FROM   (SELECT Count(1)                                mycount,

To_char(created_datetime, 'yyyy-mm-dd') mydate

FROM   ya_order

GROUP  BY To_char(created_datetime, 'yyyy-mm-dd')

ORDER  BY To_char(created_datetime, 'yyyy-mm-dd') DESC)

WHERE  rownum <= 30;





get order count with amount:

SELECT Count(1)                                    ordercount,

To_char(yoo.created_datetime, 'yyyy-mm-dd') orderdate,

SUM(ot1.total)                              orderamount

FROM   ya_order yoo

join (SELECT SUM(ol.unit_price) total,

oi.origin_order_id origin_order_id

FROM   order_info oi

left join order_line ol

ON oi.id = ol.order_info_id

WHERE  oi.origin_order_id IN (SELECT to_char(order_num)

FROM   (SELECT

yo2.order_num order_num,

yo2.created_datetime

FROM   ya_order yo2

ORDER  BY To_char(yo2.created_datetime, 'yyyy-mm-dd') DESC)

WHERE  ROWNUM <=

(SELECT Count(*)

FROM   ya_order yoc

where  yoc.created_datetime >=

SYSDATE - interval '25' day

))

GROUP  BY oi.origin_order_id) ot1

ON ot1.origin_order_id = yoo.order_num

GROUP  BY To_char(yoo.created_datetime, 'yyyy-mm-dd')

ORDER  BY To_char(yoo.created_datetime, 'yyyy-mm-dd') DESC;





new one the efficiency one:

SELECT Count(1)                                    ordercount,

To_char(yoo.created_datetime, 'yyyy-mm-dd') orderdate,

SUM(ot1.total)                              orderamount

FROM   ya_order yoo

join (SELECT SUM(ol.unit_price * ol.qnty) total,

oi.origin_order_id origin_order_id

FROM   order_info oi

left join order_line ol

ON oi.id = ol.order_info_id

WHERE  oi.origin_order_id IN (SELECT to_char(order_num)	FROM   ya_order yoc where  yoc.created_datetime >=SYSDATE - interval '25' day )

GROUP  BY oi.origin_order_id) ot1

ON ot1.origin_order_id = yoo.order_num

GROUP  BY To_char(yoo.created_datetime, 'yyyy-mm-dd')

ORDER  BY To_char(yoo.created_datetime, 'yyyy-mm-dd') DESC;



p.s

ya_order -> order infomation like coupon create date etc..

order_info -> user infomation like the address name of the user.

order_line -> each order may contain a lot of item, each item will be a row of the order_line.





get child product by parent:

select * from ya_product_title_rel where PRODUCT_TITLE_PARENT_SKU = '1052684647';





indexer for a product:

select concat (concat (shopper_id,'_'),sku)from ya_customer_review where sku = 1052684647 and shopper_id in ('4028f854320422990132042db6780000',

'8a81844f31fab0d70131ffbf77340030',

'8a81841e5d2bc4b6015d2f7bd3950000');





find the point for specified user:

select * from ya_elite_club_point where shopper_id in (select shopper_id from ya_shopper where email = 'vprod@yopmail.com');





check the account has permission for particular table:

select * from user_tab_privs where table_name = 'YA_APP_API_TOKEN';





## type problem

even the character is not meet the maximum size with char(32), the space will be added following the custom character from hibernate.

this may be lead to the select issue from the ORM framework.

please use the varchar instead of, since the varchar does even not meet maximum size, the space will not be added.







## Responsys

the responsys is a big data CRM tool powered by Oracle.

jewelfish-scheduleJob-oracleCrmJob.xml defines the job which runs for updating the data to Responsys.



after jewelfish is built we can run it on

cd jewelfish\jewelfish-schedulejob

java -Xmx2048m -DisMassUpdate=false -DfasterSpringInit=false -jar target/jewelfish-schedulejob-2.2-SNAPSHOT.oracleCrmJob.jar

the config file jewelfish-scheduleJob-oracleCrmJob.xml is used to set which cronjob runs.



every 30 seconds the job will sync the data from Oracle DB to Reponsys.



in Reponsys portal we can expand the folder(database) and select a table to find the data updated from DB.



Testing case:

```
http://wiki/wiki/index.php/Frontend:Projects:2021:YS_Oracle_CRM_integration#Testing
```




before lanuch task:

1. verify the production config

2. test sending message to browser without login

3. test sending message to browser with ys shopper login



for the task 1:

to verify the key between webiste and responsys

tutorial:

https://docs.oracle.com/en/cloud/saas/marketing/responsys-develop-web/Web_Push/setup_instructions.htm



1.download the js from responsys system.

2.https://uat.yesstyle.com/webpush-service-worker.js -> this is the js embeded to the website.

3.compare their two key, the appserviceKey and the apiKey



for the task 2:

1.using the webPushManagerAPI.getVisitorId() in console to retrieve the chrome instance ID like a9783759-30b4-78d5-4f64-8aabe2c18548

2.go to the responsys portal to send the message.

2.1	App Developer Console -> Mobile apps tab -> YS App -> Edit

2.2 Web Push Apps tag -> Platforms  ->  select one platform to send the push message.



for the task 3:

1. we need to find the device ID or shopper ID first.

1.1 in the home.HTML line 59 can find the shopper ID like 4028fb307e432534017e432923540000

2.go to the Reponsys portal

2.1 Folder -> Master Data -> MASTER_CONTACTS_LIST_WEBPUSH

2.2 Click the find button will popup the criteria to find the RIID_ (the unique ID for sending the push message)

2.3 in the USER_IDENTIFIER_ Row input the shopper ID in 1.1 found.

2.4 the Device ID and RIID_ will show after search.

3.back to responsys home page to send the message.

3.1	App Developer Console -> Mobile apps tab -> YS App -> Edit

3.2 Web Push Apps tag -> Platforms  ->  select one platform to send the push message.



p.s please turn on the notification in windows10 for chrome, otherwise the message can not be received.







## thread was gone when debug in intellij

1.since the sql developer is using same table and does not commit the change, please commit it.









# CR or Bug

## header add link for mobile view CR

Background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=89910

Bug 89910

add the influencer link in the home page navigationmenu for mobile web



step:

Server Side(Backend & Web):

1.header.java add option

2.MobileScreenSizeHeaderOptions.java edit the change for new style link

3.MobileScreenSizeHeaderOptions.html add new influencerlink



methodology:

1. change it to the mobile view in chrome

2. find the HTML with the same class or use the asset key

3. find out the corresponding JAVA class

4.Header.java will create all the header links containing the option in getMobileHeaderOptions()

5.MobileScreenSizeHeaderOptions will be created to represent the header link for mobile view.

6.HTML will control the monitor size to display or hide the mobile tag.







## app feedback in app rating(Phase 1)

Background:

create a new table to store the feedback from user

https://docs.google.com/document/d/1rivSyg--pi4wWfwLvjVSsTPtaxqTRyr1nxgiI5KEwhc/edit



step:

Server Side(Backend):

```
com.yesasia.yesstyle.app.wicket.rest.resource.AppCommonRestResource#setInAppRatingAnswer
```
public BasicJsonData setInAppRatingAnswer()



1. model design

2. service layer

3. Api level how to invoke



Client Side(APP):

OrderConfirmation.dart



methodology:

1. design the table

2. create the POJO or domain and write the annotation to make it link to the table designed before.

3. create the DAO inheritance from hibernate.

4. config the XML to let spring manage to Dao

5. create the service and inject the DAO in it, still need to config the XML to let spring manage it.

6. in the controller, inject service to it.

7. in App call this API to post data.







## app feedback in app rating(Phase 2)

Background:

pop up will open in more than order confirmation page other than phase 1.

https://yawin-my.sharepoint.com/:w:/g/personal/felixc_yesstyle_com/Eewe27ZTnxRElYRcNn-kmi0B1KTOqQ9d2lEbPLLqqnJmaw\

http://wiki/wiki/index.php/Frontend:Projects:2022:YS_In-App_Ratings_and_Reviews



App:

concern:

in dialog display logic:

step 1 is fine we can check the bags containing 4th items.

step 2 is fine we can check the login status for this user.

step 3 is fine we can check the last after add review time for this user.

step 4 is not fine, we need to check user stay in which page now,

there is checkout page and other page, if user is in other page we need to trigger the flow.

and other page is capability to trigger review dialog.

step 5 should be fine, change the review dialog UI and logic.



solution1:

1.check the user add item action in PDP.

2.if the product is more than 3 items,logined,last after add time is more than 365 trigger and dialog timer;

3.set the event or provider on check out process page.

4.if the user access this page set the global value popupFlag being false.

5.after 10 seconds later the check the popupFlag if true popup the dialog.



solution2:

since all non checkout page popup the dialog instead of main page.

the solution would be stick the timer on these four page.

I have changed these file:

1.BuyingInfo.dart L1341(addProductOptionToBag), the add to bag event will trigger this method, we can count bag items here.

2.DialogService.dart, all these four page will call this method to pop up rating dialog and there has logic to determine the popup pop or not.

3.FrontendContext.dart maintanace a global variable that save the 4th items when add to bag.

4.BrandsListingCategoires.dart,Browsing.dart,Home.dart,Product.dart is the page to pop up the rating dialog.

```
in the init method to call DialogService#showDoYouEnjoyThisAppDialog
```


final solution:

1.using dialogService.dart to call InAppRatingAndReviewService.there would be a dead loading if we call the popup dialog directly, because of the loading gif does not disapear.

2.every time we access one of the page(home,shop,bag,account),flutter will re-rendering all other 3 page.

3.so this will call the build method of these 4 page, if we use InAppRatingAndReviewService directly, other page dialog may not finish.

4.base on step 3, this will occur the conflict as the multiple dialog call.

5.with using WidgetsBinding.instance!.addPostFrameCallback, the next dialog only appear after rendering finish.

```
6.most of page of this prject will call the DialogService#showFullScreenLoading in build method.
```
```
7.the DialogService#showFullScreenLoading will use the addPostFrameCallback to rendering the dialog with async mechanism.
```
8.because of the step 2, after the rating dialog show we need to set the show flag become false, otherwise, the rating popup will show again.





Server:

1. add two more feild in the app rate feedback table

2. add method into  the DAO to retrieve the time.

3. add the get appRateFeedback API to let the app call







## xmas note

Background:

Bug 91536

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=91536

when user add the JIT product will popup the notification



step:

Client Side(APP):

1. ShoppingBag.dart edit the _createBasket() method, add one more custom widget.

2. read the christmasShippingNote(asset key) and (christmasShippingNoteTopicId) from server

3. if empty just return a new container not the custom widget.



Server Side(Backend):

1. add two product type list(in-stock and JIT) in ShoppingBagRestResourceServiceImpl.getShoppingBagBasketItemJsonData().

2. add two flag to indicate the user's shopping bag has these two type product.

2.1 if yes set value setChristmasShippingNote and setChristmasShippingNoteTopicId

2.2 the value for setChristmasShippingNote is using displayByResourceKey(DisplayContext displayContext, String resourceKey) to get.

2.3 if user shopping bag only includes one type product no need to set value to these two field.



Server Side(WEB):

1.find BasketItemContainer which will contain the product item -> MainContent L118

2.find BagItemsList which will contain the message note -> MainContent L309

3.in BagItemsList Constructor there will have the mssage component and place our xmas note in it

4.each java class has corresponding html, so add the component in BagItemsList html (like  <wicket:container wicket:id="christmasShippingNote" unwrap>)

5.create our xmas note class and html.

6.if there is no topic id in JSON data, we will set it visble is false in our new xmas class. (Christmasshippingmessage)

7.if has value, using YsLink to get the topic, and asset key embeded in HTML.

8.using  getRestUrlService().getHelpTopicUrl() to popup the help note.



methodology:

server ->

1. global search the asset key to find out what place using it. should be HTML.

2. locate to the same folder to find the JAVA class

3. deep in the logic will find the topic the note using.

App ->

1.defin the new field transafer the data between server to client

2.find out the place to add new field in JsonData, in this case is BasketLineItemJsonData.dart

3.rewrite Constructor and Json parser

4.add one more widget to display the notes.







## flyingfish(yesasia) add attribute

Background:

Bug 92181



for DB:

select * from ya_attribute where attribute_id = 90187;

select * from ya_product where sku = 1108950377;

select * from ya_prod_attr where sku = 1108950377;

e.g: com.yesasia.flyingfish.web.wicket.panel.shoppingnote.generator.GameShippingProductShoppingNoteGenerator



step:

Server Side(Backend):

1. create one more shopping note generator to retrieve the resource key. like IntendedAgeFifteenShoppingNoteGenerator

2. config the xml to inject new generator in it in shoppingNoteContext.xml

3. using AnyAttributesEligibilityChecker to store the ya_attribute id.

4. the ya_attribute id using the class Attribute.java to store its id.

5. the framework will loop the generator and get the corresponding checker to see the note should display or not.



methodology:

1. find the existing note and set the breakpoint on that class.

2. check the stack trace to find the entry point. (like ProductInfo.java)

3. place logic in the correct place.







## reset password

Background:

Bug 92310 -> this CR seems to be done in YA.



flow:

YesStyle:

https://www.yesstyle.com/rest/myaccount/v1/requestresetpassword send email to reset password.

com.yesasia.yesstyle.web.wicket.panel.memberpage.resetpassword.requestresetpassword.RequestResetPassword

https://www.yesstyle.com/rest/myaccount/v1/doresetpassword reset the password.

com.yesasia.yesstyle.web.wicket.panel.memberpage.resetpassword.doresetpassword.DoResetPassword

https://it-vincentc.yawin.yesasia.com:8443/rest/myaccount/personal-information/v1 update myaccount



YesAsia:

https://www.yesasia.com/global/en/secure/reset-password.html send an email to reset the password.

ResetPasswordPage.java

https://www.yesasia.com/?wicket:interface=:5:resetPasswordContainer:content:actionForm:contentContainer:submitButton::IActivePageBehaviorListener:0:3&wicket:ignoreIfNotActive=true&random=0.6410648106199894 reset password.

DoResetPassword.java, since the page does not specify the form URL will call back the same URL with ajax call.



class:

DoResetPage.java -> DoResetPassword.java



flow hierarchy:

YesStyle

com.yesasia.yesstyle.web.wicket.panel.memberpage.MainContent -> com.yesasia.yesstyle.web.wicket.panel.memberpage.resetpassword.ResetPassword ->

com.yesasia.yesstyle.web.wicket.panel.memberpage.resetpassword.doresetpassword.DoResetPassword -> MyAccountRestResource.doResetPassword()

yesasia:

com.yesasia.yesstyle.web.wicket.panel.memberpage.resetpassword.doresetpassword.DoResetPassword -> callback createSubmitButton method in the same class







## India

reference:http://wiki/wiki/index.php/Frontend:Projects:2021:YS_2%25_equalization_levy_for_India







## same SKU 1020228533 for all order line items

Background:

reference:https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=92500



flow:

```
1. the order detail page is in com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.Detail#createOrdersContainer
```
```
2. the #createOrdersContainer will create a few containers, and the DetailContent container is used for ordering product lines.
```
3. the com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.detailcontent.DetailContent is used to display the product line in order history.

```
4. in DetailContent.html#orderedItemsContainer is used to contain each product information. this place is what we need to find out why the same SKU for all line.
```
5. the next hierarchy is com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.item.Item, the item collection.

6. the next hierarchy is com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.item.items.Items,  each item will be set on this class and corresponding html.

7. for the shipping page is myaccount/order.html/oa.3_ii.16957807 not myaccount/order.html/oa.2_ii.16957807, we need to find the invoice page.

8. place one more wicket:id in HTML and used it in java class.

9. remember to add children into the new container otherwise the page will crash.



methodology:

1. set breakpoint in the mounted path to check the URL will go to which class.

2. this class will have the wicket:id to create another container.

3. this container will insert data in it.

4. this procedure will repeat a few times to get the final class which represents the data we find.



sql:

select * from ya_product where SKU = '1020228533';

select * from invoice where ID = '16957807'

select * from order_info where ID = '16200764'



select * from(select * from order_info o left join order_line ol on o.ORIGIN_ORDER_ID = ol.ORDER_INFO_ID order by o.ORIGIN_ORDER_ID desc) where rownum < 10;



user account:

audreyannwhitworth@gmail.com







## CRM Adding new data fields(RegistrationSource) in Reponsys

Background:

reference: https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=91957

SOW:http://wiki/wiki/index.php/Frontend:Projects:2021:Support_CRM_Journey_Building_in_Oracle-Marketing



the Infinity data was added before this CR:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=91613

but the communication is delayed by passing a new record to Responsys from Infinity

so the new solution is to add the new column in the shopper model to save this new change.



the signup type:

Default

Quick signup banner

Checkout page



step:

1. design the new field to add to the ya_shopper table

2. write down in 001_initial.sql

3. edit the relative domain to add a new field and its getter, setter. place a correct annotation on it.

4. write down a new testcase to insert data on it.

5. find out the place to insert the business logic in it.

6. the constant is used enum.

7.the MasterContactListShopperUpdateScheduleJob is used upload data to oracle responsys server.

```
7.1 add the field in #getFieldNames method.
```
```
7.2 retrieve the field in #getRecordsForSynchronization method
```






## CRM Adding new data fields(RegistrationType and RegistrationDeviceType) in Reponsys

Background:

reference:https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=92961

oracle responsys -> master contact list



RegistrationType:

GOOGLE("Google"),

PAYPAL("Paypal"),

APPLE_ID("Appleid"),

FACEBOOK("Facebook"),

EMAIL("Email"),



RegistrationDeviceType:

APP("app"),

WEB("web"),

MOBILE_APP("mobile app"),



step:

App API:

```
1.AppCheckoutShopperRestResource#signUp line 358
```
normal signup in app

```
2.AppSocialLoginRestResource#processSocialLoginRequest line 288
```
using the apple id to sign up

```
3.AppCheckoutSocialLoginRestResource#socialLoginNonMemberConnect
```
sign up with the oauth.

Web API:

```
1.ShopperCheckoutRestResource#signUp L392
```
normal signup

```
2.MyAccountRestResource#signUp L407
```
normal signup

```
3.MyAccountRestResource#quickSignUp L625
```
normal sign up

```
4.SocialLoginRestResource#connect L577
```
oauth sign up

CronJob:

```
MasterContactListCustomerProfileUpdateScheduleJob#getFieldNames
```


sql:

table join ->

select cp.registration_type,cp.registration_device_type,TO_CHAR(s.CREATED_DATE,'MM/DD/YYYY HH24:MI:SS') from

ya_customer_profile cp right join ya_shopper s on cp.shopper_id = s.shopper_id where email in ('c1@c.com','c2@c.com','c3@c.com');





select s.registration_source,cp.registration_type,cp.registration_device_type,TO_CHAR(s.CREATED_DATE,'MM/DD/YYYY HH24:MI:SS') from

ya_customer_profile cp right join ya_shopper s on cp.shopper_id = s.shopper_id where email in ('f15a@a.com','f15b@b.com','f15c@c.com','f15d@d.com');



format date ->

select TO_CHAR(CREATED_DATE,'MM/DD/YYYY HH24:MI:SS') from ya_shopper where email = 'v3@a.com';







## CRM Adding browsing language

Background:

reference:https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=93602

MasterContactListShopperUpdateScheduleJob is used to upload the information of shopper to oracle responsys



code:

```
1.MasterContactListShopperUpdateScheduleJob#getFieldNames
```
the responsys field name.

```
2.MasterContactListShopperUpdateScheduleJob#getRecordsForSynchronization
```
retrieve from DB



check why there no language persist in DB for those user.

annadombrowski2001@gmail.com

amin@mx9.freecom.ne.jp

mkato@mvh.biglobe.ne.jp

demzre@hotmail.com

amglad@hotmail.com

seoulgerl@aol.com



seoulgerl@aol.com does not exist.



cause:

the language was created in 19-09-2014, but amglad@hotmail.com,amin@mx9.freecom.ne.jp,demzre@hotmail.com and mkato@mvh.biglobe.ne.jp was created on 2001

the YA account will not create the record for ya_shopper_site_preference, so user register for YA will not have the language.



sql:

select * from ya_shopper_site_preference sp right join ya_shopper s on sp.shopper_id = s.shopper_id where s.email in

('annadombrowski2001@gmail.com','amin@mx9.freecom.ne.jp','mkato@mvh.biglobe.ne.jp','demzre@hotmail.com','amglad@hotmail.com','seoulgerl@aol.com');







## CRM Adding new data fields in Responsys -external shopper id

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=93666

we need to upload one more feild to the responsys

csv ->

writing anohter cron job to generate the CSV.

we should use the DatabaseExportToCsv_IT_dev.JAV to export the CSV file.



->main function will invoke the exportCsvC method

->the exportCsvC method need to eat  the filename, a set of shopperId,the total records count, and the really query using the shopperID as parameter.

->exportCsvC logic is to call the executeResultSet with shopperID to get the all other column data.

->in last, using multiple thread to output the data to CSV using invokeTasksConcurrently method.



p.s:

OracleCrmJobMain is entry point for all Oracle CRM job.







## CRM web notification, push message

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=90383

before using oracle framework to push message, the Yesstyle is using firebase to push the notification to user.

the popup message js file is wpIndex_min.js,



step:

JAVA->

1. define the constant and ThreadLocal<Boolean> in FeatureSwitch, the getter, setter of the boolean type is needed.

1.1 the constant is the key used for setting in the header to enable the feature like enableYsIndiaTax

1.2 the ThreadLocal<Boolean> can be considered as a thread scope variable and indicate the feature is on or off.

2. in the FeatureSwitchFilter, write down the logic to set the feature to enable and set it to be false in the finally block.

2.1 like

if ("true".equals(httpServletRequest.getHeader(

FeatureSwitch.FEATURE_KEY_ENABLE_YS_ORACLE_RESPONSYS_WEB_NOTIFICATION))) {

FeatureSwitch.setEnableYsOracleResponsysWebNotification(true);

}

2.2

FeatureSwitch.setEnableYsOracleResponsysWebNotification(false);

3.in the FeatureSwitchUtil, the utils class is used for getting the value indicating the feature is on or off.

like:

public static boolean isEnableEnableYsOracleResponsysWebNotification() {

if (FeatureSwitch.isUat()) {

return true;

}

return FeatureSwitch.isEnableYsOracleResponsysWebNotification();

}

4. in the Script, using the FeatureSwitchUtil to get the value to switch the feature is on or off.

dev\frontend\workspace.intellij\v3-yesstyle\yesstyle-war\src\main\java\com\yesasia\yesstyle\web\wicket\panel\script\Script.java Line 91

if (FeatureSwitchUtil.isEnableEnableYsOracleResponsysWebNotification()) {

add(new InvisibleContainer("firebase"));

add(new OracleResponsysWebNotification("oracleResponsysWebNotification",ysContext));

} else {

add(new Firebase("firebase", ysContext));

add(new InvisibleContainer("oracleResponsysWebNotification"));

}



5.also need to change the cloudMessaging in YsTemplatePage when swiching to use the oracle responsys.

if (FeatureSwitchUtil.isEnableEnableYsOracleResponsysWebNotification()) {

result.add(new InvisibleContainer("cloudMessaging"));

} else {

result.add(new CloudMessaging("cloudMessaging",

YsTemplatePage.this));

}







## CRM 2022 luckydraw, push message

Background:

we need to replace the firebase to oracle responsys in luckydraw page, so we need to deep into it.

luckydraw page  https://it-vincentc.yawin.yesasia.com:8443/en/new-year-lucky-draw.html



flow:

1.draw

the luckydraw using for loop to each point with indicate it as active to change the style. the result retrieved from server.

can refer to code app.directive("ysPointsGiveawayPage", function()...

2.count

using app.directive('ngTimer', to be a timer.





code:

1.PointsGiveaway2022Page is the container page for luckydraw HTML.

2.PointsGiveaway2022 is core panel to display the luckydraw component.

3.PointsGiveaway2022ResultDialog is the dialog popup after result is got from server.



there are 3 directive in app.js need to pay attention:

1.ysPointsGiveawayPage -> loop the luckydraw and display the result, and call the showResultDialog

2.ngTimer -> get the counting time from this directive.

3.ysPointsGiveawayResultDialog -> after result is shown the dialog display logic



step:

1.dev\frontend\workspace.intellij\v3-yesstyle\yesstyle-war\src\main\webapp\scripts\app.js

edit the funciton app.directive("ysPointsGiveawayResultDialog", function($window, $rootScope)



2.reference to https://docs.oracle.com/en/cloud/saas/marketing/responsys-develop-web/api_reference.htm?Highlight=web%20notification

and https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API



3.firebase.messaging() will be replaced by register from oracle

4.common.js 235 is used to save the log.



issue:

the firebase has the request notification function with the permission callback after invoked,

but the oracle does not, so we need to use the browser built in function to call the notification popup

and do the register after web notification permission granted.

like:

Notification.requestPermission().then(function(permission) {

if (permission === 'granted') {

if (oldPermission === 'default') {

// log click allow event

subscriptionEcommerceData['notification_subscription_action'] = 'allow';

CommonService.pushDataLayer(subscriptionEcommerceData);

}

$cookies.remove(skipDialogCookieName);

webPushManagerAPI.register();

const notificationOptions = {

body: 'Thanks for subscribing to push notifications',

icon: 'https://ddvql06zg3s2o.cloudfront.net/Assets/res/imgs/ys_logo.png',

};

var notification = new Notification('Welcome to YesStyle.com', notificationOptions);

notification.onclick = function(event) {

event.preventDefault(); // prevent the browser from focusing the Notification's tab

window.open('https://www.yesstyle.com/en/women.html', '_blank');

notification.close();

}

}

})







## CRM dynamic coupon jewelfish

Background:

Dynamic Coupon Creation->

there is needed for updating the coupon to oracle responsys server after marketing create the coupon in the jewelfish.



code flow:

```
1.JewelfishApplication#doInit will initialize the path and mounted it to the java class.
```
2.the coupon page will map to the CouponPage, the address would have the number as parameter to pass to server, 2 is the coupon creation.

```
2.1 in the CouponPage#createContent can check the creation coupon panel.
```
3.the Manage.java is panel type page which is used to append into the HTML page.

4.in the Mange panel there has another panel to append to mange panel.

4.1 the Details panel is what we are looking for.

4.2 deep in it can find the logic to handle behavior of creation of the coupon.

5.AuthenticatedPage is used to set up the dropdown list for select the search or create coupon tag.



PropertyModel:

bind the filed from the object to the ajax box:

AjaxCheckBox result = new AjaxCheckBox("multipleCoupon",

new PropertyModel(getCouponModel(), "multipleCoupon")) {

this statement is binding the filed  m_multipleCoupon of CouponModel to multipleCoupon in HTML.

when every check or uncheck will update the m_multipleCoupon automatically.

the createMultipleCouponContainer will control the block would shown according by the m_multipleCoupon.



Validator for form:

1.before the HTML page is rendering the form validator will be added:

1.1 result.add(new FormComponentValidator(result).setErrorMessageIfNullValue("Please enter the coupon code."));

1.2 some validator only check the if null, like 1.1, some validator has there non null check logic.

2.the submit button will request to same page to trigger the validator.

3.the Manage should have the onsubmit button to grab the data from form.







## CRM dynamic coupon schedule job

Background:

task 4:

http://wiki/wiki/index.php/Frontend:Projects:2021:Support_CRM_Journey_Building_in_Oracle-Marketing





two table:

YA_COUPON_CREATE_BATCH and ya_coupon_oracle_crm

YA_COUPON_CREATE_BATCH for user create rule.

ya_coupon_oracle_crm for communication with responsys.

ya_coupon is the table that FE user really to use the coupon.



table relationship:

1.YA_COUPON_CREATE_BATCH is used for UI in jewelfish to create a set rule like threshold

2.YA_COUPON is a table will store the coupon generated by YA_COUPON_CREATE_BATCH relating job(in this task will use new job)

3.step 2 will also generate the ya_coupon_oracle_crm record.



batch creation flow:

1.user create the batch create record in jewelfish.

2.the program persist the record in ya_coupon_oracle_crm table

3.the CouponCreateBatchScheduleJob will create the coupon

3.1 get the couponCreateBatches record list

3.2 retrieve the list and set loop the single element each time

3.3 set this element to be procssing.

3.4 get the coupon from couponCreateBatch.getCouponData()

3.5 while this signle coupon batch element since each batch element can have multiple coupon

3.6 persist the coupons

4.send email to inform user the action done.





job implementation:

1.DynamicCouponPetQueryScheduleJob is job 1 for sync the CRM pet to local.

2.DynamicCouponPetSyncScheduleJob is job 2 for read the YA_COUPON_CREATE_BATCH and create record on ya_coupon and ya_coupon_oracle_crm.

3.DynamicCouponPetSyncScheduleJob is job 3 for uploading the usage status from loacl to CRM.



cron job hierarchy:

```
->AbstractResponsysScheduleJob#execute
```
```
->CouponOralcePetSyncScheduleJob#getIdsForSynchronization
```
```
->AbstractProfileExtensionTableScheduleJob#synchronize
```
```
->AbstractProfileExtensionTableScheduleJob#getRecordsForSynchronization(or subclss)
```
```
->AbstractProfileExtensionTableScheduleJob#getSqlTemplateForRecords
```
```
->ApiSupportImpl#mergeListRecipients(call to add or update customer profile, only have customerId field)
```
```
->ApiSupportImpl#mergeProfileExtensionRecipients(call to update pet table,need to tell pet name)
```


flow:

1. the record in YA_COUPON_CREATE_BATCH is used to create coupon(each record will carete some ya_coupon and YA_COUPON_ORACLE_CRM according to the init_value_to_create and how many coupon with specified pet table still not assgined)

2. the cron job 2 will create the coupon and upload to the Dynamic_coupon_SUPP_QA(UAT ENV)

3. the lister will use these uploaded coupon to assgin to the customer.

4. cron job 1 will retrieve the data form reponsys to update YS database with the assgined coupon to the customer.

5. customer can use this coupon in the shopping.

6. after coupon used, the cron job 3 will upload the used status and used date to responsys.

7. the job 2 will create coupon again after coupon assgined to customer according the init_value_to_create - non assgined coupon.



test step:

1. run all the dynamic coupon Schedule job [DynamicCouponPetQueryScheduleJob,DynamicCouponSuppTableSyncScheduleJob,DynamicCouponPetSyncScheduleJob].

2. create two records on YA_COUPON_CREATE_BATCH with pet table name and wait the Schedule job 2 run to upload data.

the pet table name is Dynamic_coupon_Anniversary_EUR_QA and Dynamic_coupon_Cart_RC_USD_PET_QA, the init_value_to_create set to 3

Expected result: the new coupon with pet name Dynamic_coupon_Anniversary_EUR_QA and Dynamic_coupon_Cart_RC_USD_PET_QA is uploaded to Dynamic_coupon_SUPP_QA.

2. after lister to do its duty assgin the coupon to customer, the customer can use the coupon in YS after Schedule job 1 run and finish.

create a new record manually for each pet table on Dynamic_coupon_Anniversary_EUR_QA and Dynamic_coupon_Cart_RC_USD_PET_QA with customer_id and riid in responsys if lister does not do its job.

Expected result: the assgined customer can see the assgined coupon in YS.

3. user use the coupon to buy items in YS.

Expected result: customer can use the coupon successful in purchasing item in YS.

4. the Schedule job 3 will sync the usage status and used date.

Expected result: the status of used and used_date of pet table(Dynamic_coupon_Anniversary_EUR_QA and Dynamic_coupon_Cart_RC_USD_PET_QA) in responsys is uploaded.



sql for retrieve data:

select ycoc.sync_supp_table_name,

(select init_value_to_create from ya_coupon_create_batch where sync_supp_table_name = ycoc.sync_supp_table_name) as threshold,

(select count(*) from ya_coupon_oracle_crm where create_date > SYSDATE - interval '24' hour and sync_supp_table_name = ycoc.sync_supp_table_name) created_in_last_24H,

(select count(*) from ya_coupon_oracle_crm where create_date > SYSDATE - interval '1' hour and sync_supp_table_name = ycoc.sync_supp_table_name ) created_in_last_1H,

(select count(*) from ya_coupon_oracle_crm where create_date < SYSDATE - interval '24' hour and sync_supp_table_name = ycoc.sync_supp_table_name and shopper_id is null) unassign_gt_24H,

(select count(*) from ya_coupon_oracle_crm where create_date < SYSDATE - interval '1' hour and sync_supp_table_name = ycoc.sync_supp_table_name  and shopper_id is null) unassign_gt_1H,

(select count(*) from ya_coupon_oracle_crm WHERE sync_supp_table_name = ycoc.sync_supp_table_name) as total,

(select count(*) from ya_coupon_oracle_crm WHERE shopper_id is null and is_sync_coupon_table = 'Y' and is_coupon_used = 'N' and sync_supp_table_name = ycoc.sync_supp_table_name) as free_in_supp,

(select count(*) from ya_coupon_oracle_crm WHERE shopper_id is null and is_sync_coupon_table = 'N' and is_coupon_used = 'N' and sync_supp_table_name = ycoc.sync_supp_table_name) as free_in_ys,

(select count(*) from ya_coupon_oracle_crm WHERE shopper_id is not null and is_coupon_used = 'N' and sync_supp_table_name = ycoc.sync_supp_table_name) as assigned_not_used,

(select count(*) from ya_coupon_oracle_crm WHERE shopper_id is not null and is_coupon_used = 'Y' and sync_supp_table_name = ycoc.sync_supp_table_name) as assigned_used,

(select count(*) from ya_coupon_oracle_crm WHERE is_sync_coupon_table = 'Y' and shopper_id is null and is_coupon_used = 'Y' and sync_supp_table_name = ycoc.sync_supp_table_name) as used_before_assign,

(select count(*) from ya_coupon_oracle_crm WHERE is_sync_coupon_table = 'N' and is_coupon_used = 'Y' and sync_supp_table_name = ycoc.sync_supp_table_name) as used_before_upload,

(select id from ya_coupon_create_batch WHERE  sync_supp_table_name = ycoc.sync_supp_table_name) as BatchId

from ya_coupon_oracle_crm ycoc where sync_supp_table_name is not null group by sync_supp_table_name;







## crm Table for the localised category name

Background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=95376



sub table does not customer id

pet table does have customer id



can use jewelfish to check the digaram:

department - view department tree



table:

ya_dept_site

ya_dept

ya_dept_rel 14068

ya_dept_lang;



language code:

langue code = EN -> 1 , FR -> 15 , DE(GERMAN) -> 16, ES(Spanish) -> 17, IT(Italian) -> 19 , NL(Dutch) -> 20 , zh_TW -> 2 , zh_CN -> 5



can reference to class:

DepartmentSynchronizationJob -> the

```
com.yesasia.jewelfish.dynamodbsynchronizationjob.department.DepartmentSynchronizationJob#synchronize
```
and

```
com.yesasia.jewelfish.web.wicket.panel.departmentpage.department.viewdepartmenttree.ViewDepartmentTree#ViewDepartmentTree
```


trace:

set category:

at com.yesasia.frontend.rest.wicket.model.ChildDepartmentsModel.getChildOrSiblingDepartments(ChildDepartmentsModel.java:80)

at com.yesasia.yesstyle.web.wicket.page.AbstractYsWebPage.getChildDepartments(AbstractYsWebPage.java:689)

at com.yesasia.yesstyle.web.wicket.panel.header.navigationmenu.NavigationMenu.prepareSecondLevelDepartmentConfig(NavigationMenu.java:685)

at com.yesasia.yesstyle.web.wicket.panel.header.navigationmenu.NavigationMenu.createConfig(NavigationMenu.java:401)

at com.yesasia.yesstyle.web.wicket.panel.header.navigationmenu.NavigationMenu.createConfig(NavigationMenu.java:347)

at com.yesasia.yesstyle.web.wicket.panel.header.navigationmenu.NavigationMenu.prepareConfig(NavigationMenu.java:252)

at com.yesasia.yesstyle.web.wicket.panel.header.navigationmenu.NavigationMenu.<init>(NavigationMenu.java:200)

at com.yesasia.yesstyle.web.wicket.panel.header.cachablenavigationmenu.CachableNavigationMenu$1.createContent(CachableNavigationMenu.java:39)

at com.yesasia.yesstyle.web.wicket.panel.cacheablecontentcontainer.CacheableContentContainer.<init>(CacheableContentContainer.java:68)

at com.yesasia.yesstyle.web.wicket.panel.header.cachablenavigationmenu.CachableNavigationMenu.createNavigationMenu(CachableNavigationMenu.java:35)

at com.yesasia.yesstyle.web.wicket.panel.header.cachablenavigationmenu.CachableNavigationMenu.<init>(CachableNavigationMenu.java:30)

at com.yesasia.yesstyle.web.wicket.panel.header.Header.<init>(Header.java:183)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.createBody(YsTemplatePage.java:1499)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.<init>(YsTemplatePage.java:305)

at com.yesasia.yesstyle.web.wicket.page.ErrorPage.<init>(ErrorPage.java:40)

at sun.reflect.GeneratedConstructorAccessor215.newInstance(Unknown Source:-1)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)

h1 title is null will use name instead:

java.lang.Thread.State: RUNNABLE

at com.yesasia.frontend.service.display.displayer.common.DepartmentDisplayer.doDisplay(DepartmentDisplayer.java:35)

at com.yesasia.frontend.service.display.displayer.common.DepartmentDisplayer.doDisplay(DepartmentDisplayer.java:19)

at com.yesasia.frontend.service.display.displayer.common.AbstractCommonSimpleDisplayer.display(AbstractCommonSimpleDisplayer.java:39)

at com.yesasia.frontend.service.display.displayer.common.DepartmentH1TitleDisplayer.doDisplay(DepartmentH1TitleDisplayer.java:39)

at com.yesasia.frontend.service.display.displayer.common.DepartmentH1TitleDisplayer.doDisplay(DepartmentH1TitleDisplayer.java:20)

at com.yesasia.frontend.service.display.displayer.common.AbstractCommonSimpleDisplayer.display(AbstractCommonSimpleDisplayer.java:39)

at com.yesasia.frontend.service.display.SimpleDisplayService.display(SimpleDisplayService.java:45)

at sun.reflect.GeneratedMethodAccessor432.invoke(Unknown Source:-1)

at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)

at java.lang.reflect.Method.invoke(Method.java:498)

at org.apache.wicket.proxy.LazyInitProxyFactory$JdkHandler.invoke(LazyInitProxyFactory.java:484)

at com.sun.proxy.$Proxy244.display(Unknown Source:-1)

at com.yesasia.yesstyle.web.wicket.panel.AbstractYsPanel.display(AbstractYsPanel.java:373)

at com.yesasia.yesstyle.web.wicket.panel.AbstractYsPanel.display(AbstractYsPanel.java:368)

at com.yesasia.yesstyle.web.wicket.panel.browsingpage.browsingheading.department.Department.createDepartmentInformationContainer(Department.java:42)

at com.yesasia.yesstyle.web.wicket.panel.browsingpage.browsingheading.department.Department.<init>(Department.java:32)

at com.yesasia.yesstyle.web.wicket.panel.browsingpage.browsingheading.BrowsingHeading.createDepartmentHeading(BrowsingHeading.java:53)

at com.yesasia.yesstyle.web.wicket.panel.browsingpage.browsingheading.BrowsingHeading.<init>(BrowsingHeading.java:32)

at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.createMainContent(MainContent.java:55)

at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.<init>(MainContent.java:37)

at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.createMainContent(BrowsingPage.java:1355)

at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.<init>(BrowsingPage.java:194)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)



sql to gen tree:

with t1(id, parent_id, lvl, name_path) as (

select yd.dept_id as id , null as parent_id, 1 as lvl, ydl.dept_name as name_path

from ya_dept yd

join ya_dept_lang ydl on yd.dept_id = ydl.dept_id and ydl.lang_id = 1

join ya_dept_site yds on yd.dept_id = yds.dept_id and yds.site_id = 10 and yds.is_enabled = 'Y'

where yd.dept_id in (select parent_dept_id from ya_dept_rel) and yd.dept_id not in (select dept_id from ya_dept_rel)

union all

select t2.id as id, t2.parent_id as parent_id, lvl+1 as lvl, t1.name_path || ' -> ' || t2.name_path as name_path

from

(select yd.dept_id as id , ydr.parent_dept_id as parent_id, ydl.dept_name as name_path

from ya_dept yd

join ya_dept_lang ydl on yd.dept_id = ydl.dept_id and ydl.lang_id = 1

join ya_dept_site yds on yd.dept_id = yds.dept_id and yds.site_id = 10 and yds.is_enabled = 'Y'

join ya_dept_rel ydr on yd.dept_id = ydr.dept_id) t2, t1

where

t2.parent_id = t1.id

)

SEARCH DEPTH FIRST BY id SET order1

SELECT id,

parent_id,

lvl,

name_path

FROM t1;







## deeplink or universal link added

Background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=93244

open the link in browser will redirect to the App specify page.

for this CR we need to add https://www.yesstyle.com/en/special-offers.html link becomes deeplink



step:

1.edit the AndroidManifest.xml to add the tag -> <data android:path="/en/special-offers.html" />

2.modify the DeepLinkingEvent and ChangeNotifierEvent in FrontendContext

3.create a new method handleSpecialOffersDeepLink to handle the special offer deep link in MainScreen.dart

4.the evet will fire onTriggerChange in the Home.dart after we register this event

4.1  if (changeNotifierEvent.isEliteClub != null

&& DataUtil.getBoolean(changeNotifierEvent.isEliteClub)) {

NavigatorService.pushDetail(context, new EliteClubIntro(false));

}

4.2	if (deepLinkingEvent.isEliteClub != null

&& DataUtil.getBoolean(deepLinkingEvent.isEliteClub)) {

NavigatorService.pushDetail(context, new EliteClubIntro(true));

}



Flutter:

```
MainScreen#initBranchLink will do the redirect logic.
```
```
-> MainScreen#proceedDeepLinking the detail logic.
```
```
-> MainScreen#handleSpecialOffersDeepLink open the view.
```
Home.dart will receive the evnet and call navigator to redirect which page I want.

FrontendContext,dart need to add the feild to ChangeNotifierEvent and DeepLinkingEvent



Android:

android/app/src/main/AndroidManifest.xml will set the deeplink path.

for every language,like:

<data android:path="/en/special-offers.html" />



IOS:

need to add path in backend server -> com.yesasia.yesstyle.web.wicket.http.filter.AppleAppSiteAssociationFilter

need to add it in association domain in Xcode, if there is no such domain relate to the backend server.



how to test:

Android:

change the dataService to be production link.

and send the link from email, click that in email will popup the option with using which method to open.

for user to test ->

we need to build the APK to user to test.

IOS:

generate the QRcode for that link, and scan it will popup the lanuch icon.

the app need to build again after the server side code upload and deployed, if the build is before the server update.

for user to test ->

we need to ask the user using testflight to download new version to test.

1.if user using their own iphone, we need to send the invitation to them for download.

2.using the test device from frontend team rather than other team.



deeplink:

https://www.yesstyle.com/en/elite-club-2021.html

https://www.yesstyle.com/en/special-offers.html







##  Undeliverable BE emails - Pls replace a note with new asset key (both YA & YS)

Background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=94321

replace the notes with new asset key, and display for all countries.



step:

1. using the asset key to find out what HTML is using.

2. replace old key with new key

3. corresponding JAVA logic to control the note is display or not, we change it always display.

4. check the note in UAT and prodcution in jewelfish is sync or not.



test:

check with the jewelfish and search email template in Design -> template-search

and search the id or name to find the that emai template.

the site is set to YS global or YA global in the Preview fragment.

click the pop up to verify. we can also change the supplement data to double check.



for this case the id is : 1029, 1608, 1173, 1030



p.s.

can use

```
document.querySelector("#form6 > div:nth-child(2) > table > tbody > tr > td:nth-child(4) > select").selectedIndex = 10
```
in the browser console to select what you want.

the selectedIndex can find in the element windows after inspect.



deploy:

need to deploy jewelfish + backend email job and YS.







## remove branchio in app-

Background:

http://wiki/wiki/index.php/Frontend:Projects:2022:Branchio_Remova



step:

1.find where is using the BranchioTrackingService.dart







## smart banner

Background:

after  branchio removed we need to use old banner to instead of.

the smart banner is needed to use the smart-app-banner.js for restrict the user behavior.



flow:

1.app.js add the logic to control the UI animation

2.CustomSmartAppBanner.java change the display text

3.CustomSmartAppBanner.html modify the css

4.Script.java add(new CustomSmartAppBanner("smartAppBanner", ysContext)); -> enable it.

5.Script.html add the div with wicket id smartAppBanner to let the Script.java control it.

6.Meta.html add the meta data <meta name="apple-itunes-app" content="app-id=868675907"> to display IOS native smart banner.

7.smart-app-banner-2022.js is used to change the inner html to match the new CSS.







## long term smart banner phase 1

backgroup:

```
http://wiki/wiki/index.php/Frontend:Projects:2022:Branchio_Removal#UAT
```
```
http://wiki/wiki/index.php/Frontend:Projects:2022:Branchio_Removal:Smart_App_Banner_Phase_1_Task#Smart_App_Banner_Java_Class
```
add one more banner, which display in a small area when user has visited the website before.

two UI can be swiching according different behavior.



prerequisite:

1. download smart-app-banner (v2.0)

- run command in shell

npm install --save smart-app-banner

- installed package will be inside node_modules folder, example Window node_modules path

C:\Users\chris.ng\AppData\Roaming\npm\node_modules

- banner source url

- smart-app-banner on npm

https://www.npmjs.com/package/smart-app-banner

- smart-app-banner on git

https://github.com/kudago/smart-app-banner

- orginal plugin using folk version

https://github.com/GabLeRoux/smart-app-banner/blob/e1748e46315daa28bb89ec1b040adc893bd469ed/index.js



2. download build tools

- npm install browserify -g

- npm install google-closure-compiler -g



3. build js

- go into smart-app-banner package folder (inside node_modules)

- modify package.json, replace ccjs to google-closure-compiler

- from

"build": "browserify index.js -s SmartBanner | ccjs - > dist/smart-app-banner.js",

- to

"build": "browserify index.js -s SmartBanner > dist/smart-app-banner.js",

- run below command in smart-app-banner package folder to bundle the source to single js file

npm run build

- our changes are based on smart-app-banner.js

- compress the js using google-closure-compiler on release

google-closure-compiler --js smart-app-banner.js --js_output_file smart-app-banner-min.js



Smart App Banner Javascript Library:

choose suitable library

https://github.com/ain/smartbanner.js - study whether new js lib can be used to simplify the tasks

https://github.com/GabLeRoux/smart-app-banner/blob/e1748e46315daa28bb89ec1b040adc893bd469ed/smart-app-banner.js - existing library

get source from npm to allow library function enhancement

export js library with browserfiy, google closure compiler

enhance library to pass UI (html, css)

enhance library for setting button click callback





Smart App Banner Java Class:

new class: CustomSmartAppBannerNew

add control to visibility of banner

have chance to show in all pages

add switch layout function for 2 Banner ui (design provided by kevin)

add Cookie to control which UI to show

YS_SMART_BANNER_FIRST_VISITED_URL("yssbfvu", CookieType.ONE_MINUTE_IN_SECOND * 60),

YS_SMART_BANNER_CLOSED("yssbc", CookieType.ONE_MINUTE_IN_SECOND * 60)

implement banner ui display logic



1. YS_SMART_BANNER_CLOSED found and within 1 hour => not show all banner

2. YS_SMART_BANNER_FIRST_VISITED_URL not found or empty or equal to current url => show banner 1, set YS_SMART_BANNER_FIRST_VISITED_URL to current url

3. YS_SMART_BANNER_FIRST_VISITED_URL not empty and (not equal to current url or equal to not_applicable) =>  show banner 2, set YS_SMART_BANNER_FIRST_VISITED_URL to not_applicable



add control to visibility of banner

add switch layout function for 2 Banner ui (design provided by kevin)

add Cookie to control which UI to show

firstVisitedUrl

lastDismissTime

implement banner ui display logic

1. lastDismissTime found and within 1 hour => not show all banner

2. firstVisitedUrl not found or empty => show banner 1, set firstVisitedUrl to current url

3. firstVisitedUrl not empty and equal to current url => show banner 1

4. firstVisitedUrl not empty and not equal to current url =>  show banner 2, set firstVisitedUrl to not_applicable

5. firstVisitedUrl equal to not_applicable  => show banner 2



Event Tracking:

GTM with ga

app.js

dataLayer:

-- banner viewed --

CommonService.pushDataLayer({

"event": "smartAppBannerBannerViewed",

"smartAppBannerBannerName": config.bannerName,

"smartAppBannerBannerDescription": config.bannerDescription,

"smartAppBannerDeviceType": config.deviceType

});



-- banner closed --

CommonService.pushDataLayer({

"event": "smartAppBannerBannerClosed",

"smartAppBannerBannerName": config.bannerName,

"smartAppBannerBannerDescription": config.bannerDescription,

"smartAppBannerDeviceType": config.deviceType

});



-- banner clicked --

CommonService.pushDataLayer({

"event": "smartAppBannerBannerClicked",

"smartAppBannerBannerName": config.bannerName,

"smartAppBannerBannerDescription": config.bannerDescription,

"smartAppBannerDeviceType": config.deviceType

});



implement:

1.need to split the logic and UI, so call back will be used.

2.angularJS get template from HTML will be used.

3.define in config_dev.js need to import the SmartAppBanner.js lib

4.include 2 UI in one html with difference template ID for angularjs reference.



the app.js using directive to implement the smart banner logic.

app.directive('ysSmartAppBanner', function($window, $mdDialog, $templateCache, $timeout){

return {

restrict: "A",

controller: function($scope, $attrs, $element, $log, $timeout) {

$log.info("XXX load ys smart app banner " + $attrs.ysSmartAppBannerId);



var template = $templateCache.get($attrs.ysSmartAppBannerId);

$log.info(template);



var config = ysApp.smartAppBannerConfig;

config.innerHtmlTemplate = template;



require(['smartappbanner'], function (SmartBanner) {

new SmartBanner(config);

});

}}})





gtm:

Tag

Custom Tag - Smart App Banner - Banner Clicked

Custom Tag - Smart App Banner - Banner Closed

Custom Tag - Smart App Banner - Banner Viewed

Trigger

GA - Event - Smart App Banner - Banner Clicked

GA - Event - Smart App Banner - Banner Closed

GA - Event - Smart App Banner - Banner Viewed

Variables

smartAppBannerBannerDescription

smartAppBannerBannerName

smartAppBannerDeviceType



flow:

1.java file

2.html file

3.angularjs file

4.index.js library

5.config-dev.js and config.js



a.java file will write the smartbanner html in the script part with specify argument and the icon url part using the wicket WebMarkupContainer with AttributeModifier.

a1. detect the system of the user Phone

a2. write the script element for angularjs using

a3. determine top banner or bottom banner to display

b.html file would have HTML template part,css part and the script.

b1. the script part will be written on JAVA file.

b2. html will hold the directive element in order to let angularjs control it like -> <div ys-smart-app-banner ys-smart-app-banner-id="ysSmartAppBannerId1"></div>

b3. html also holds the template tag to store on angularjs template engines ->   <script type="text/ng-template" id="ysSmartAppBannerId1">

b4. pass the template to index.js[smartappbannerlink] library, and let library to rendering it.

```
c.angularjs file like app.js#app.directive('ysSmartAppBannerLink' will retrieve the HTML as template in the script part and pass them to index.js library
```
c0. after you set the directive like ysSmartAppBannerLink, the angularjs will find the ys-Smart-App-Banner-Link attribute in HTML and control it.

c1. angularjs part will set the callback funtcion to index.js

c2. will retrieve the template from html using $templateCache.get($attrs.ysSmartAppBannerId) and pass it to index.js

c3. will control the animation of smart-banner, such as show, close, scroll down

c4. push GMT data call to GA.

d.index.js[smartappbannerlink] library will check the device type to identify what link should be used, apple or android.

d1. js will get the innerHtml from angularjs in app.js and prepend to the html dom.

require(['smartappbannerlink'], function (SmartBanner) {

var smartBanner = new SmartBanner(config);

});

d2. embed the callback function to the required button.

will trigger the app.js install function and its hold install function

the first one for datalayer push,the second one is for redirect the app store

e. the config file is used to set up the external js library, and using require(['smartappbannerlink'], cb) to import it

define({

//urlArgs: "bust=" + (new Date()).getTime(),

baseUrl: ysApp.config.jsBaseUrl,

paths: {

'angularjs' : 'lib/angular.min',

'domready' : 'domReady',

'plugin_lib' : 'lib/lib',

'plugin_angularroute' : 'lib/angular-route.min',

// temp fix for local development

'paypal' : 'lib/checkout.min',

'duScroll' : 'lib/angular-scroll-1.0.2.min',

'smartappbanner' : 'lib/smart-app-banner-custom',

},

shim: {

'angularjs' : {'exports' : 'angular'},

'domready' : {'exports' : 'domready'},

'plugin_lib' : {'deps' :['angularjs']},

'plugin_angularroute' : {'deps' :['angularjs']},

'paypal' : {'exports' : 'paypal'},

'duScroll' : {'deps':['angularjs']},

'smartappbanner' : {'exports' : 'smartappbanner'},

}

});







## long term smart banner phase 2

background:

```
http://wiki/wiki/index.php/Frontend:Projects:2022:Branchio_Removal:Smart_App_Banner_Phase_2_Task#Smart_App_Banner_Java_Class
```
using the dynamic link provided by firebase to replace store static link, when user clicks the get or download button



step:

1. server to change the display logic in CustomSmartAppBannerNew.java

2. andorid is needed to add the path to main\AndroidManifest.xml

3. xcode need to add the path to Asscoiated Domains in the Signing&Capabilites in Xcode.

4. flutter code need to change some logic in the MainScreen.dart.



p.s

target="_blank" no need, since the chrome in iOS can not redirect to store if add the target="_blank" .







## nextjs smart banner

after using nextjs, the smart banner will be more straightforward.

you can find the component AppDownloadButton and check it logic.

will be very simple than using wicket







## app rate feedback report

Background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=96952

using sql to generate a report to marketing team for analsyt.



Phase 2:

select to_char(create_dt, 'yyyy WW') as year_week,

(select count(*) from YA_APP_RATE_FEEDBACK WHERE IN_APP_RATING_ANSWER = 'YES' and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as yes,

(select count(*) from YA_APP_RATE_FEEDBACK WHERE IN_APP_RATING_ANSWER = 'NO' and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as no,

(select count(*) from YA_APP_RATE_FEEDBACK WHERE IN_APP_RATING_ANSWER = 'NO' AND app_comment is not null and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as no_feedback,

(select count(*) from YA_APP_RATE_FEEDBACK WHERE IN_APP_RATING_ANSWER = 'NOT_ANSWERED' and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as not_answered,

(select count(*) from YA_APP_RATE_FEEDBACK WHERE IN_APP_RATING_ANSWER is not null and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as total

from YA_APP_RATE_FEEDBACK yarf group by to_char(create_dt, 'yyyy WW') order by to_char(create_dt, 'yyyy WW');



phase 2 comment:

select ys.email,yarf.app_comment,yarf.create_dt from YA_APP_RATE_FEEDBACK yarf left join YA_SHOPPER ys

on yarf.shopper_id = ys.shopper_id where yarf.IN_APP_RATING_ANSWER = 'NO' AND yarf.app_comment is not null;



Phase 1:

select to_char(create_dt, 'yyyy WW') as year_week,

(select count(*) from ya_app_api_token WHERE IN_APP_RATING_ANSWER = 'YES' and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW') ) as yes,

(select count(*) from ya_app_api_token WHERE IN_APP_RATING_ANSWER = 'NO' and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as no,

(select count(distinct(yar.shopper_id)) from ya_app_api_token yaat left join YA_APP_RATE_FEEDBACK yar on yaat.shopper_id = yar.shopper_id WHERE yaat.IN_APP_RATING_ANSWER = 'NO'

AND yar.app_comment is not null and yar.in_app_rating_answer is null and to_char(yar.create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as no_feedback,

(select count(*) from ya_app_api_token WHERE IN_APP_RATING_ANSWER = 'NOT_ANSWERED' and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as not_answered,

(select count(*) from ya_app_api_token WHERE IN_APP_RATING_ANSWER is not null and to_char(create_dt, 'yyyy WW') = to_char(yarf.create_dt, 'yyyy WW')) as total

from ya_app_api_token yarf  where yarf.in_app_rating_answer is not null group by to_char(create_dt, 'yyyy WW') order by to_char(create_dt, 'yyyy WW');



phase 1 comment:

select distinct(ys.email),yarf.app_comment,yarf.create_dt from YA_APP_RATE_FEEDBACK yarf left join ya_app_api_token yaat

on yaat.shopper_id = yarf.shopper_id left join YA_SHOPPER ys on yarf.shopper_id = ys.shopper_id

WHERE yaat.IN_APP_RATING_ANSWER = 'NO'  and yarf.in_app_rating_answer is null

AND yarf.app_comment is not null;







## real time job for LoyaltyProfilePart1UpdateRealTimeScheduleJob

Background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=96814

since the old job upload does not fast enough, we split a new job to upload more frequencyly.



step:

1.create a new job LoyaltyProfilePart1UpdateRealTimeScheduleJob and copy logic from LoyaltyProfilePart1UpdateScheduleJob

2.change the trigger time in each 5 mins in the xml.







## Fastlane

Background:

http://wiki/wiki/index.php/Frontend:Projects:2022:YS_Mobile_App_deployments_and_releases_automation

we want to use jenkins and fastlane to do the CI/CD



1.set up fastlane:

1.1 download all needed tools.



2.set up the jenkins:

2.1 download and run it with linux. (using brew to install it)

2.2 need to switch to vincent user to run the jenkins.

full command with only listen 127.0.0.1 address:  /home/linuxbrew/.linuxbrew/opt/openjdk@11/bin/java -Dmail.smtp.starttls.enable=true -jar /home/linuxbrew/.linuxbrew/opt/jenkins-lts/libexec/jenkins.war --httpListenAddress=127.0.0.1 --httpPort=8080

the command with listen all incoming ip address:  /home/linuxbrew/.linuxbrew/opt/openjdk@11/bin/java -Dmail.smtp.starttls.enable=true -jar /home/linuxbrew/.linuxbrew/opt/jenkins-lts/libexec/jenkins.war --httpPort=8080

2.3 set the pipeline with declaration style.

2.4 read the auto deploy section



3.extra work:

3.1 read the version number from txt file.

def version = readFile "${env.WORKSPACE}/android/version.txt"

echo "${version}"

3.2 repalce the UAT or Prod link.

static const String _SERVER_URL = String.fromEnvironment(

'url',

defaultValue: 'https://www.yesstyle.com/'

);

flutter build apk --split-per-abi --dart-define=_SERVER_URL=https://uat.yesstyle.com/

or

flutter build apk --split-per-abi --dart-define=_SERVER_URL=https://uat.yesstyle.com/  --flavor dev



4.need to approvals class : Manage Jenkins -> In-process Script Approval

method hudson.model.Cause$UserIdCause getUserName

method hudson.model.Run getCause java.lang.Class

method hudson.scm.SubversionChangeLogSet getLogs

method java.util.Properties load java.io.InputStream

method jenkins.scm.RunWithSCM getChangeSets

method org.jenkinsci.plugins.workflow.support.steps.build.RunWrapper getRawBuild

new java.io.File java.lang.String

new java.util.Properties

staticMethod java.lang.Thread currentThread

staticMethod org.codehaus.groovy.runtime.DefaultGroovyMethods withInputStream java.io.File groovy.lang.Closure



5.plugin:

pipeline utility steps



6.pipeline:

jenkins:

ios:

pipeline {

agent any

parameters {

string(name: "VERSION_NAME", description: "ex: 4.4.48, refer to version in pubspec.yaml", defaultValue: "")

string(name: "GIT_BRANCH", description: "branch to build", defaultValue: "master")

}

environment{

PATH = "$HOME/.rbenv/shims:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$HOME/flutter/bin:/Library/Apple/usr/bin"

ITMSTRANSPORTER_FORCE_ITMS_PACKAGE_UPLOAD = 'false' // in order to work with XCode 14.0.1

LC_ALL = 'en_US.UTF-8'

LANG = 'en_US.UTF-8'

MAC_PASSWORD = 'xxxxx'

APP_CONNECT_KEY_FILE_PATH = '/Users/frontend/Desktop/jenkins/AuthKey_6RC42L7UGP.p8'

}

stages {

stage('Prepare Parameters') {

steps {

script {

BUILD_PLATFORM = "iOS"

BUILD_ENVIRONMENT = "UAT"

// BUILD_ENVIRONMENT = "PROD"

SERVER_URL = "https://uat3.yesstyle.com/"

// SERVER_URL = "https://www.yesstyle.com/"

}

}

}

stage('Checking Parameters') {

steps {

script {

if (VERSION_NAME == '') {

error('Invalid VERSION_NAME')

}

if (GIT_BRANCH == '') {

error('Invalid GIT_BRANCH')

}

}

}

}

stage('Git Update') {

steps {

script {

checkout scmGit(

branches: [[name: "*/$GIT_BRANCH"]],

extensions: [checkoutOption(30), cloneOption(noTags: false, reference: '', shallow: true, timeout: 30)],

userRemoteConfigs: [[credentialsId: 'token', url: 'https://dev.azure.com/yesstyle/yesstyle-app/_git/yesstyle-app/']])

}

}

}

stage('Get Next Version Code From App Store Connect') {

steps {

dir("ios") {

script {

sh "bundle install"

sh(script: "fastlane get_next_version_code_ios version_name:$VERSION_NAME", returnStdout:true).trim()



env.WORKSPACE = pwd()

Properties properties = new Properties()

def props = readProperties  file: "${env.WORKSPACE}/fastlane/version.properties"

echo "${props.versionCode}"

VERSION_CODE = "${props.versionCode}"

}

}

}

}

stage('Print Information') {

steps {

script {

print "== Jenkin build information =="

print "BUILD_NUMBER=$BUILD_NUMBER"

print "== App information =="

print "Platform=$BUILD_PLATFORM"

print "Environment=$BUILD_ENVIRONMENT"

print "VERSION_NAME=$VERSION_NAME"

print "VERSION_CODE=$VERSION_CODE"

print "== Git information =="

print "GIT_BRANCH=$GIT_BRANCH"

print "== System information =="

print "USER=$USER"

print "PATH=$PATH"

print "HOME=$HOME"

}

}

}

stage("Set Version Name and Version Code"){

steps{

dir("ios"){

script{

sh "bundle install"



sh "fastlane set_version_name_ios version_name:$VERSION_NAME"

sh "fastlane set_version_code_ios version_code:$VERSION_CODE"

}

}

}

}

stage('Build iOS with the latest Flutter toolchain') {

steps {

script {

sh "flutter clean"

sh "flutter build ios --release --no-codesign --dart-define=_SERVER_URL=$SERVER_URL"

}

}

}

stage('Build iOS') {

steps {

dir("ios") {

script {

sh "bundle install"



sh "fastlane build_ios"

}

}

}

}

stage('Distribute to Testflight') {

steps {

dir("ios") {

script {

sh "bundle install"



def GIT_COMMIT_INFORMATION = sh(script: "git log -1 --pretty='%h %an [%ad] %B'", returnStdout: true).trim()

print "GIT_COMMIT_INFORMATION=$GIT_COMMIT_INFORMATION"



sh "fastlane upload_to_testflight_ios  changelog:'$BUILD_ENVIRONMENT $VERSION_NAME ($VERSION_CODE) | Jenkins build: $BUILD_NUMBER | Git: ${GIT_COMMIT_INFORMATION}'"

}

}

}

}

} // end of stages

}





android:

pipeline {

agent any

parameters {

string(name: "VERSION_NAME", description: "ex: 4.4.48, refer to version in pubspec.yaml", defaultValue: "")

string(name: "GIT_BRANCH", description: "branch to build", defaultValue: "master")

}

environment{

PATH = "$HOME/.rbenv/shims:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$HOME/flutter/bin:/Library/Apple/usr/bin"

LC_ALL = 'en_US.UTF-8'

LANG = 'en_US.UTF-8'

FIREBASE_TOKEN = 'xxxxx' // refer to ./android/fastlane/Fastfile

}

stages {

stage('Prepare Parameters') {

steps {

script {

BUILD_PLATFORM = "Android"

BUILD_ENVIRONMENT = "UAT"

// BUILD_ENVIRONMENT = "PROD"

SERVER_URL = "https://uat3.yesstyle.com/"

// SERVER_URL = "https://www.yesstyle.com/"

}

}

}

stage('Checking Parameters') {

steps {

script {

if (VERSION_NAME == '') {

error('Invalid VERSION_NAME')

}

if (GIT_BRANCH == '') {

error('Invalid GIT_BRANCH')

}

}

}

}

stage('Git Update') {

steps {

script {

checkout scmGit(

branches: [[name: "*/$GIT_BRANCH"]],

extensions: [checkoutOption(30), cloneOption(noTags: false, reference: '', shallow: true, timeout: 30)],

userRemoteConfigs: [[credentialsId: 'token', url: 'https://dev.azure.com/yesstyle/yesstyle-app/_git/yesstyle-app/']])

}

}

}

stage('Get Next Version Code From Firebase') {

steps {

dir("android") {

script {

sh "bundle install"

sh(script: "fastlane get_next_version_code_android", returnStdout:true).trim()



env.WORKSPACE = pwd()

Properties properties = new Properties()

def props = readProperties  file: "${env.WORKSPACE}/fastlane/version.properties"

echo "${props.versionCode}"

VERSION_CODE = "${props.versionCode}"

}

}

}

}

stage('Print Information') {

steps {

script {

print "== Jenkin build information =="

print "BUILD_NUMBER=$BUILD_NUMBER"

print "== App information =="

print "Platform=$BUILD_PLATFORM"

print "Environment=$BUILD_ENVIRONMENT"

print "VERSION_NAME=$VERSION_NAME"

print "VERSION_CODE=$VERSION_CODE"

print "== Git information =="

print "GIT_BRANCH=$GIT_BRANCH"

print "== System information =="

print "USER=$USER"

print "PATH=$PATH"

print "HOME=$HOME"

}

}

}

stage('Set Version Name and Version Code') {

steps {

script {

def VERSION_TO_BE_REPLACED = sh(script: "cat pubspec.yaml | ggrep -P 'version: \\d+\\.\\d+\\.\\d+\\+\\d+'", returnStdout:true).trim()

print "VERSION_TO_BE_REPLACED=$VERSION_TO_BE_REPLACED"



sh "gsed -i 's/$VERSION_TO_BE_REPLACED/version: $VERSION_NAME+$VERSION_CODE/' pubspec.yaml"

}

}

}

stage('Build Android') {

steps {

script {

sh "flutter clean"

if ("$BUILD_ENVIRONMENT" == 'UAT') {

sh "flutter build apk --dart-define=_SERVER_URL=$SERVER_URL"

}

if ("$BUILD_ENVIRONMENT" == 'PROD') {

sh "flutter build apk --split-per-abi --dart-define=_SERVER_URL=$SERVER_URL"

env.WORKSPACE = pwd()

print "== APK location =="

print "${env.WORKSPACE}/build/app/outputs/flutter-apk"

sh "open ${env.WORKSPACE}/build/app/outputs/flutter-apk"

}

}

}

}

stage('Distribute to Firebase') {

when { expression { "$BUILD_ENVIRONMENT" == 'UAT' } }

steps {

dir("android") {

script {

// install fastlane and its plugin

sh "bundle install"



def GIT_COMMIT_INFORMATION = sh(script: "git log -1 --pretty='%h %an [%ad] %B'", returnStdout:true).trim()

print "GIT_COMMIT_INFORMATION=$GIT_COMMIT_INFORMATION"



sh "fastlane upload_to_firebase changelog:'$BUILD_ENVIRONMENT $VERSION_NAME ($VERSION_CODE) | Jenkins build: $BUILD_NUMBER | Git: ${GIT_COMMIT_INFORMATION}'"

}

}

}

}

} // end of stages

}







uat-firebase-distribution-get-version

pipeline {

agent any

environment{

PATH = "/Users/IT-FE-MAC/.rbenv/shims:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/IT-FE-MAC/flutter/bin:/Library/Apple/usr/bin:/Users/IT-FE-MAC/flutter/bin"

}

stages {

stage('Get Last Version') {

steps {

script {

def LAST_VERISON = sh(script: "fastlane firebase_app_distribution_get_latest_release", returnStdout:true).trim()

print "LAST_VERSION=$LAST_VERISON"

}

}

}

}

}





ios:

fastlane file:

```
# This file contains the fastlane.tools configuration
```
```
# You can find the documentation at https://docs.fastlane.tools
```
```
#
```
```
# For a list of all available actions, check out
```
```
#
```
```
#     https://docs.fastlane.tools/actions
```
```
#
```
```
# For a list of all available plugins, check out
```
```
#
```
```
#     https://docs.fastlane.tools/plugins/available-plugins
```
```
#
```


```
# Uncomment the line if you want fastlane to automatically update itself
```
```
# update_fastlane
```


default_platform(:ios)



platform :ios do



desc "Set iOS app version number"

lane :set_version_name_ios do |options|

v = options[:version_name]

puts 'set iOS version to: ' + v

increment_version_number(

version_number: v

)

increment_version_number_in_xcodeproj(

version_number: v

)

end



desc "Set iOS app build number"

lane :set_version_code_ios do |options|

increment_build_number(

build_number: options[:version_code]

)

end



desc "Get iOS app next build number"

lane :get_next_version_code_ios do |options|

load_token()

build_number = app_store_build_number(live: false, version: options[:version_name], initial_build_number: '0')

File.write("version.properties", "versionCode=" + (build_number.to_i + 1).to_s, mode: "w")

end



desc "Build iOS app"

lane :build_ios do

load_token()

get_certificates(

keychain_password: ENV['MAC_PASSWORD']

)

enable_automatic_code_signing

build_ios_app(

archive_path: "../build/iOS/archive/Runner.xcarchive",

output_directory: "../build/iOS/ipa/",

output_name: "YesStyle.ipa"

)

end



desc "Upload to TestFlight"

lane :upload_to_testflight_ios do |options|

load_token()

upload_to_testflight(

changelog: options[:changelog],

skip_waiting_for_build_processing: true,

skip_submission: true,

ipa: "../build/ios/ipa/YesStyle.ipa"

)

end



```
# key_filepath path is hard coded
```
desc "Load App Connect Api Key Token"

lane :load_token do |options|

app_store_connect_api_key(

key_id: "6RC42L7UGP",

issuer_id: "69a6de7e-cc36-47e3-e053-5b8c7c11a4d1",

key_filepath: ENV['APP_CONNECT_KEY_FILE_PATH'],

duration: 1200,

in_house: false

)

end



end







Appfile:

place it on ios/fastlane folder



```
app_identifier("com.yesstyle.app") # The bundle identifier of your app
```
```
apple_id("chrisngwp@gmail.com") # Your Apple email address
```


```
itc_team_id("10675161") # App Store Connect Team ID
```
```
team_id("XP7Q9QT9TX") # Developer Portal Team ID
```


```
### # For more information about the Appfile, see:
```
```
#     https://docs.fastlane.tools/advanced/#appfile
```




Pluginfile:

place it on ios/fastlane folder



```
# Autogenerated by fastlane
```
```
#
```
```
# Ensure this file is checked in to source control!
```


gem 'fastlane-plugin-versioning'





AuthKey_6RC42L7UGP.p8:

place it on ios/fastlane folder



## -BEGIN PRIVATE KEY-

MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgbnRoWjg/hi/mxx3q

NBuyxF3Ee7+7xjAsCB81q0C+HLmgCgYIKoZIzj0DAQehRANCAAQpS6YMde0Ysb0M

JKAekaogDuSEfM0+Pr5CC0dfcAzuGPTlGxep9zkw7zbjAUGQyXv2bT/E1ACEJlx/

Blb28Qjc

## -END PRIVATE KEY-





Gemfile:

place it on ios/



source "https://rubygems.org"

gem "fastlane"



plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')

eval_gemfile(plugins_path) if File.exist?(plugins_path)





andorid:

fastlane file:

place it on android/fastlane folder



```
# This file contains the fastlane.tools configuration
```
```
# You can find the documentation at https://docs.fastlane.tools
```
```
#
```
```
# For a list of all available actions, check out
```
```
#
```
```
#     https://docs.fastlane.tools/actions
```
```
#
```
```
# For a list of all available plugins, check out
```
```
#
```
```
#     https://docs.fastlane.tools/plugins/available-plugins
```
```
#
```


```
# Uncomment the line if you want fastlane to automatically update itself
```
```
# update_fastlane
```


default_platform(:android)



platform :android do

```
# Firebase function credential setup
```
```
# 1. install Firebase CLI
```
```
# curl -sL https://firebase.tools | bash
```
```
#
```
```
# 2. login firebase
```
```
# firebase login:ci
```
```
#
```
```
# Noted that a google account with right to access project 'YesStyle Mobile App'
```
```
# is needed during login to generate the token
```
```
#
```
```
# 3. store the token as the environment variable
```
```
# FIREBASE_TOKEN
```
```
#
```
```
### # reference url:
```
```
# https://blog.logrocket.com/fastlane-flutter-complete-guide/
```
```
# https://firebase.google.com/docs/app-distribution/android/distribute-fastlane#google-acc-fastlane
```
```
# https://medium.com/@ryanisnhp/firebase-app-distribution-and-fastlane-5303c17b4395
```
desc "Upload apk to firebase app distribution"

lane :upload_to_firebase do |options|

firebase_app_distribution(

app: "1:879495958870:android:f4dd43db7f17c8bc",

```
#testers: "chrisngwp@gmail.com",
```
groups: "fastlane-yesstyle-testers",

release_notes: options[:changelog],

apk_path: "../build/app/outputs/flutter-apk/app-release.apk",

firebase_cli_path: "/usr/local/bin/firebase"

)

end



desc "Get firebase app distribution next version code"

lane :get_next_version_code_android do |options|

latest_release = firebase_app_distribution_get_latest_release(

app: "1:879495958870:android:f4dd43db7f17c8bc"

)

File.write("version.properties", "versionCode=" + (latest_release[:buildVersion].to_i + 1).to_s, mode: "w")

end

end



AppFile:

place it on android/fastlane folder



```
json_key_file("") # Path to the json secret file - Follow https://docs.fastlane.tools/actions/supply/#setup to get one
```
```
package_name("com.yesstyle.android") # e.g. com.krausefx.app
```


PluginFile:

place it on android/fastlane folder



```
# Autogenerated by fastlane
```
```
#
```
```
# Ensure this file is checked in to source control!
```


gem 'fastlane-plugin-firebase_app_distribution'



Gemfile:

place it on android folder



source "https://rubygems.org"



gem "fastlane"



plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')

eval_gemfile(plugins_path) if File.exist?(plugins_path)



7. explanation:

in pipeline:

pipeline -> environment would be a shell environment that can be retireved from same shell.





extract commit log:

https://stackoverflow.com/questions/63063977/how-to-get-latest-git-commit-author-name-or-message-in-jenkins-multibranch-scrip

https://stackoverflow.com/questions/51878037/how-to-extract-string-from-commit-message-in-jenkins-pipeline

https://stackoverflow.com/questions/58603411/how-to-access-git-commit-message-inside-sh-step-in-a-jenkins-pipeline

https://stackoverflow.com/questions/41140255/how-to-get-the-git-latest-commit-message-and-prevent-the-jenkins-build-if-the-co

https://stackoverflow.com/questions/50856212/how-to-use-github-commit-message-and-commit-id-inside-jenkins-pipeline

https://docs.cloudbees.com/docs/cloudbees-ci-kb/latest/client-and-managed-masters/how-to-access-changelogs-in-a-pipeline-job

https://gist.github.com/vonschnappi/804ab70bddd82fd163998392c61effb1



build with version:

https://medium.com/karlmax-berlin/versioning-with-flutter-299869e68af4

https://github.com/flutter/flutter/issues/41955



perl -i -pe 's/^(version:\s+\d+\.\d+\.)(\d+)(\+)(\d+)$/$1.($2+1).$3.($4+1)/e' pubspec.yaml





## qr code on shipping list

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=98830

sacn the qr code will go to the page and auto fill up the order number.



guest order user scans the qr code will redirect to the link that contains the order num:

https://uat.yesstyle.com/en/secure/myaccount/track-your-order.html?tyoigo=true&onum=18357140







## Remove focus after login fail for iOS, dev_after---

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=99963

megre the code from branch dev_after to master branch, the dev_after is the UI design branch.



step:

1. dev_after_4.4.17 is used as the branch for UI team commit their code.

2. check in this branch and merge it trunk branch.







## Bug 99990 - [H2 Support 2022] Check the handling for guest

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=99990

in the checkout page there has one more registration method in the checkout page which call it guest;



flow:

1.GuestCheckout.java -> for rendering the registration form.

2.the form endpoint is ShopperCheckoutRestResource -> register a account.

3.MasterContactListShopperUpdateScheduleJob is used to upload the data to responsys.



answer:

Hi Martina,



please find the answer below:

1. we do pass their email, as the mechanism of the guest will register an account without the password for this user. the registration_source is [Checkout page] in this case.

2. there is shopper_id(CUSTOMER_ID_) will be uploaded to oracle responsys, you can use it to identify it. if you mean how to identify the account whether guest type, there may need the code change to upload one more field to responsys.

3. if an individual placing 2 guest orders with or without the same email, YS will pass two customer_id to responsys,since there will create 2 new accounts.

4. if the guest later registered as a member with same email, we will create a new one with different type_id for his/her.



some records with different format of customer_id will be fixed.



guest sign up link:

https://it-vincentc.yawin.yesasia.com:8443/en/checkout/sign-in.html







## can't apply Dynamic_coupon in BE

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=100298

FE can apply coupon for a order with usage type O even the coupon has shopper id, but BE can not, so we may need to sync the code from O to N in coupon query job.



step:

1. update the coupon status for the dynamic coupon.

2. O is for all shopper, but can not be used when the shopper_id is assgined in the BE.

3. N is for assigned shopper

4. when the query job update coupon, also update the coupon status for the coupons from O to N;







## GA4 enhancement phase 1 for web

background:

add ga4 event in java code and push it to the GTM.

```
http://wiki/wiki/index.php/Frontend:Projects:2022:GA4_Enhancement_Phase_1#Web
```


step:

1. create the eventdata.

2. return the event data to js

3. js call the commonService.pushDataLayer to upload data to GTM.



flow:

1. if using the social login, the endpoint will call secure/oauth/response (SocialLoginOAuthCallbackPage)

```
other than restful /rest/socialLogin/v1/member-connect(SocialLoginRestResource#connect)
```
2.



test:

```
1. go to the GTM website. : https://tagmanager.google.com/?authuser=1#/home
```
2. select the YesStyle Global

3. choose the [GA4 Enhancement Phase 1] workspace

4. click the preview button on the top right corner

5. enter the https://uat.yesstyle.com/en/home.html and click the connect.

6. the test browser will pop.

7. you can test the event now, the event will show on the preview page of GTM.

7.1 save the item to the wishlist. (add_to_wishlist event)

7.2 clicks the “Continue” Button on the shopping cart page(begin_checkout event)

7.3 sign in and sign up.(login and sign_up event)

7.4 add the products to the bag.(add_to_cart event)

7.5 views the product on the product detail page.(view_item event)

7.6 using a new account to place the order. (nc_purchase event)

7.7 using accounts that have placed an order to place one more order. (purchase event)







## GA4 enhancement phase 1a for app

background:

```
http://wiki/wiki/index.php/Frontend:Projects:2022:GA4_Enhancement_Phase_1a#Ballpark_Estimation
```
after finish the web we need to do it in app, also the firebase plugin in app is needed to versionning to upper 9

so we need to upgrade flutter from 2.2.3 to above 3.0



Schedule:

Development: 2022/9/8 - 2022/10/7

UAT: 2022/10/10 - 2022/10/13



step:

App:

1. we need to switch the flutter version from 2.2.3 to 3.0.3 firstly.

1.1 go to flutter office website downlaod the 3.0.3 version.

1.2 change the env path from 2.2.3 to 3.0.3

1.3 change the flutter sdk path in the android studio.

1.4 using flutter doctor to check the environment set up.

2. update the firebase version in pubspec.yaml

2.1 firebase_analytics: 9.3.3

2.2 firebase_core: 1.21.1

2.3 using the flutter pub deps -s list to check the transitive dependencies.

2.4 after discuss, should upgrade all the firebase libraries.

2.5 using flutter pub outdated to check current flutter framework which version can upgrade -> reslover column.

3. modify the firebaseTrackingservice.dart as the API changed of the the firebase_analytics after upgrade.

3.1 find the event should be placed.

3.2 using the flutter inspector to find the correct place

server:

1.using feature switch to control GA4 app feature should turn on or not.

2.there lack of some fields to let App pushes the GA4 event.



finding:

UAT can not use the facebook and google to login,

because oft the frontend.facebookOAuthServiceForNewOAuth will throws the java.lang.UnsupportedOperationException

at com.yesasia.frontend.service.oauth.scribejava.AbstractScribeJavaOAuthService.createEndUserAuthorizationRequest(AbstractScribeJavaOAuthService.java:60)





issue:

1. If an array is passed to Firebase through a custom event, it will result in error 21

(as documented here: https://firebase.google.com/docs/analytics/errors). Only events provided by Firebase can include item list field.



2. When using the item field to store a single element in a custom event, it must be accompanied by List<AnalyticsEventItem>,

otherwise the event cannot be fired. Additionally, only values of type List<AnalyticsEventItem> can be stored in the items field.





solution:

using custom evnet with same event name that firebase provide:

like:

parameters

..putIfAbsent("currency", () => CURRENCY_USD)

..putIfAbsent("coupon", () => couponCode)

..putIfAbsent("value", () => orderTotal)

..putIfAbsent("transaction_id", () => orderNumber)

..putIfAbsent("shipping",

() => shippingFee != null ? double.tryParse(shippingFee) : 0)

..putIfAbsent(

"tax", () => salesTax != null ? double.tryParse(salesTax) : 0)

..putIfAbsent("items", () => ga4Data)

..putIfAbsent("new_customer", () => flag);

logCustomEvent("purchase", parameters);



test:

since there is different to web, app do not use GTM to upload data, so GTM websie no data display.

we can only go to the firebase websie to check it.



Android:

we need to turn on the ADB friebase debug.(can only for release package[build])

```
https://firebase.google.com/docs/analytics/debugview#android
```
1 command for turn on & turn off.

1.1 adb shell setprop debug.firebase.analytics.app com.yesstyle.android [PACKAGE_NAME]

1.2 adb shell setprop debug.firebase.analytics.app .none.

2. go to the debug view website.

https://console.firebase.google.com/u/0/project/_/analytics/debugview



iOS:

https://stackoverflow.com/questions/55590978/how-to-pass-command-line-argument-to-xcode-based-on-build-configuration

https://stackoverflow.com/questions/43754848/how-to-debug-firebase-on-ios-adhoc-build

https://stackoverflow.com/questions/57193660/how-to-enable-firebase-analytics-debugview-on-testflight

1.if we use the command line parameter, the testflight app can not be tested with debugview

2.so we need to programatically insert the code to turn on the debugview

3.since the flutter project will init the firebase before application:didFinishLaunchingWithOptions,

so we need to place the code on init method.

appDelegate.swift:

override init(){

var newArguments = ProcessInfo.processInfo.arguments

newArguments.append("-FIRDebugEnabled")

ProcessInfo.processInfo.setValue(newArguments, forKey: "arguments")

super.init()

}



4. go to the debug view website.

https://console.firebase.google.com/u/0/project/_/analytics/debugview



p.s turn off the debug view for IOS, need to remove the code in step 3, do not upgrade version directly need uninstall the app in ios device first





study:

https://drive.google.com/file/d/1ARxOqIshFWOQ9XTGvivOmi_UG-YAkZAK/view

https://www.optimizesmart.com/how-to-set-up-event-tracking-in-google-analytics-4/



bug:

GA4: Price is appended with multiple zeros

https://stackoverflow.com/questions/67224841/ga4-price-is-appended-with-multiple-zeros

https://stackoverflow.com/questions/73373023/item-price-with-added-zeroes-without-dot-in-google-analytics-4-debug

https://stackoverflow.com/questions/71598773/price-inside-items-object-is-not-correct



set command line argument:

https://stackoverflow.com/questions/55590978/how-to-pass-command-line-argument-to-xcode-based-on-build-configuration

https://stackoverflow.com/questions/43754848/how-to-debug-firebase-on-ios-adhoc-build

https://stackoverflow.com/questions/57193660/how-to-enable-firebase-analytics-debugview-on-testflight?noredirect=1&lq=1

https://medium.com/@eason2019tw/ios-swift-%E5%95%9F%E7%94%A8ios-google-analytics-%E7%9A%84debugview-%E6%A8%A1%E5%BC%8F-28f235e2f120

https://github.com/firebase/firebase-ios-sdk/issues/143

https://www.searchdiscovery.com/blog/enable-google-analytics-with-debugger/

https://stackoverflow.com/questions/51500575/firebase-analytics-seemingly-works-perfect-but-just-wont-show-up



array type error:

https://stackoverflow.com/questions/63518409/ios-in-firebase-analytics-kfirparameteritems-parameter-not-accept-array-and

https://stackoverflow.com/questions/66711609/purchase-not-showing-in-ga4-monetization

https://stackoverflow.com/questions/69993521/firebase-analytics-error-21-when-logging-a-firebase-e-commerce-event-in-capital

https://stackoverflow.com/questions/61250308/firebase-analytics-view-item-list-items-not-showing

https://stackoverflow.com/questions/44421234/firebase-analytics-custom-list-of-values

https://stackoverflow.com/questions/67760407/cant-obtain-the-items-array-in-firebase-analytics-when-using-logevent



not showing debugview:

https://stackoverflow.com/questions/68466596/why-google-tag-manager-event-is-not-being-reflected-in-ga-4-report

https://stackoverflow.com/questions/67185643/google-analytics-not-sending-any-events-or-custom-dimensions-data-to-dashboard

https://stackoverflow.com/questions/65571350/google-analytics-4-event-parameters

https://stackoverflow.com/questions/66338482/ga4-receiving-event-name-but-no-event-value







## ga4 phase2 migrate mapp to ga4

background:

https://wiki.yawin.yesasia.com/wiki/index.php/Frontend:Projects:2022:GA4_Enhancement_Phase_2

as give up the mapp, ga4 would take over mapp as free service. we need to pass the parameter that passes to mapp to GA4.



one more event added : Smart_app_banner_click

using below command line to test it.

adb shell am start -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d "https://click.ysi.bz/SmartAppBanner?sabbru=aHR0cHM6Ly93d3cueWVzc3R5bGUuY29tL2VuL3lha28tZ2luZ2hhbS1taW5pLXNraXJ0L2luZm8uaHRtbC9waWQuMTA2NzAzNjUxMD91dG1fbWVkaXVtPXRlc3RtJnV0bV9zb3VyY2U9dGVzdHMmdXRtX2NhbXBhaWduPXRlc3RjJnV0bV9jb250ZW50PXRlc3Rjb24mdXRtX3Rlcm09dGVzdGsmbWNnPWtvbCZiYWM9ZWZnaCZyY289QVNERkdISksmYWlkPTEyMzQ1Njc4"







## ga4 phase3 add more event

background:

https://wiki.yawin.yesasia.com/wiki/index.php/Frontend:Projects:2022:GA4_Enhancement_Phase_3

add more event to GA4





event:

all event need to create a new event class

1.influencer_registration =>

page: https://uat.yesstyle.com/en/secure/social-media.html

request: https://uat.yesstyle.com/rest/myaccount/influencer/v1/request-influencer-information

js: golbal search keyword [geiTrack] to find where using this key

2.student_registration

page: https://uat.yesstyle.com/en/secure/myaccount/summary.html

request: https://uat.yesstyle.com/rest/student-program/v1/student-program-upgrade

js: golbal search keyword [gespaTrack] to find where using this key

3.organization_registration

page:https://uat.yesstyle.com/en/secure/organization-program-sign-up.html

request:https://uat.yesstyle.com/rest/student-program/v1/organization-program-upgrade/981818

js: golbal search keyword [geopaTrack] to find where using this key

6.view_item_lsit:

first page:https://uat.yesstyle.com/en/women-activewears/list.html (ssr)

```
BrowsingPage#getGa4EventData
```
second page:https://uat.yesstyle.com/rest/products/v1/department/14099?pn=2&sb=136&yet=9 (restful with ajax)

```
ProductsRestResource#ProductsJsonData
```
search page:

https://it-vincentc.yawin.yesasia.com:8443/rest/products/v1/search?pn=4&q=stocking&sb=136&yet=9

brand page:

https://www.yesstyle.com/rest/products/v1/brand/317041?pn=2&sb=136&yet=9



7.select_item:

https://it-vincentc.yawin.yesasia.com:8443/en/porstina-drawstring-hem-piping-trim-sweatpants/info.html/pid.1098554270

need to do it in the js file. since the product page also have the view_item event for GA4



select promotion is  diffcult, but view promotion is most diffcult

PA banner promtion is carousel in beauty page

PB banner promtion is gridview banner



for promotion:

cms location:

```
### NavigationMenuTab#getCmsHighlights:
```
```
YS_NAVIGATION_MENU_SALE_QUICK_LINKS_DATA - #createDiscountOffers
```
```
YS_NAVIGATION_MENU_SALE_FASHION_CLEARANCE_DATA - #getSaleHighlights
```
```
YS_NAVIGATION_MENU_SALE_BEAUTY_CLEARANCE_DATA - #getBeautyHighlights
```
```
### NavigationMenu#getCmsHighlights:
```
YS_NAVIGATION_MENU_WOMEN_MA_DATA

YS_NAVIGATION_MENU_BEAUTY_MA_DATA

YS_NAVIGATION_MENU_MEN_MA_DATA

YS_NAVIGATION_MENU_LIFESTYLE_MA_DATA

YS_NAVIGATION_MENU_HEALTH_MA_DATA



get cmsblock and transfer it to hightlight:

```
NavigationMenuTab#getCmsHighlights
```
```
NavigationMenu#getCmsHighlights
```


new in dropdown list:

```
NavigationMenu#createNewInHighlightContainer
```
```
NavigationMeun#createHighlightContainer - women,beauty,men,healty
```
```
SpecialOfferMenuTab#createSaleHighlightContainer - lifestyle
```
```
SpecialOfferMenuTabNew#createSaleHighlightContainer - sale
```
```
SpecialOfferMenuTabNew#createBeautyHighlightContainer - sale
```


view promotion:

using js to control the event push.

code -> send event to GTM:

app.directive("ga4Data", function(CommonService) {

let listenFlag = true;

let pagePromotionIndex = 0;

let eventLists = [];

let menuListenFlag = true;

let menuPromotionIndex = 0;

let menuEventList = [];

let menuNavId;

return {

restrict: "A",

scope: false,

controller: function($scope, $element, $attrs) {

if ($attrs.ga4Data) {

var div = document.createElement('div');

var result = div.innerText || div.textContent;

div.innerHTML = $attrs.ga4Data;

var result = div.innerText || div.textContent;

var jsonObject = angular.fromJson(result)

if (jsonObject.is_navigation === undefined || jsonObject.is_navigation != true) {

jsonObject.event = undefined;

eventLists[pagePromotionIndex++] = jsonObject;

//console.log(i++);

//console.log('CommonService.pushDataLayer(eventLists)'+eventLists);

}

}



$scope.$on("tracking:ga4data",function(event, navId) {

var div = document.createElement('div');

var result = div.innerText || div.textContent;

div.innerHTML = $attrs.ga4Data;

var result = div.innerText || div.textContent;

var jsonObject = angular.fromJson(result);

if (jsonObject.is_navigation == true && navId == jsonObject.nav_opt) {

jsonObject.event = undefined;

menuEventList[menuPromotionIndex++] = jsonObject;

//console.log(menuIndex++);

//console.log('CommonService.pushDataLayer(eventLists)'+eventLists);

}

if (menuListenFlag) {

angular.element(document).ready(function() {

//window['google_tag_manager']['GTM-W5P9CP'].dataLayer.reset();

var gtm = window.google_tag_manager['GTM-W5P9CP'];

gtm.dataLayer.set('ga4_promotion',undefined); // need to clear the old data

var pushEvent = {};

pushEvent.event = "view_promotion";

pushEvent.ga4_promotion = menuEventList;



//console.log('tracking:ga4data.pushDataLayer(eventLists)' + menuEventList);

CommonService.pushDataLayer(pushEvent);



menuEventList = [];

menuPromotionIndex = 0;

menuListenFlag = true;

});

menuListenFlag = false

}

});



if(listenFlag){

angular.element(document).ready(function() {

var pushEvent = {};

pushEvent.event = "view_promotion";

pushEvent.ga4_promotion = eventLists;

//console.log('CommonService.pushDataLayer(eventLists)' + eventLists);

CommonService.pushDataLayer(pushEvent);

});

listenFlag = false;

}

}

}

});



code - trigger the send event for desktop:

$scope.openMegaMenu = function(item, time = 500){

$timeout.cancel(megaMenuTimer);

if($mdMedia('gt-sm')){

megaMenuTimer = $timeout(function(){

$scope.navOpt=item;

$scope.openNavSecondLevel = false;

$scope.openNavFirstLevel = false;

$scope.openNavThirdLevel = false;

},time);

$rootScope.$broadcast("tracking:ga4data", item);

}

}

code - trigger the send event for mobile view:

$scope.openMenuLevel = function(lv,item){

$rootScope.$broadcast("tracking:ga4data", item);

if($mdMedia('sm') || $mdMedia('xs') ){

if (lv == 'second') {

$scope.navOpt = item;

$scope.openNavSecondLevel = true;

$scope.openNavFirstLevel = true;

}



if(lv == 'third'){

$scope.openNavThirdLevel = true;

$scope.deptId = item;

}

}

}

flow:

when user mouseover the navigation menu, will fire openMegaMenu, and openMegaMenu will do the broadcast with tracking:ga4data.

the broadcast will be captured by $scope.$on



app:

deep link:

adb shell am start -a android.intent.action.VIEW -c android.intent.category.BROWSABLE -d "https://www.yesstyle.com/en/special-offers.html"







## ga4 performance tuning---

background:

as the ga4 view item list has launched, the performance becomes poor, we need to tune it.



step:

1. fullproduce model to use browseProduct

2. using curl -w "Connect time: %{time_connect}\nTime to first byte: %{time_starttransfer}\nTotal: %{time_total}\n" -o /dev/null -sL https://www.yesstyle.com/en/beauty-bath-shower/list.html/bcc.15573_bpt.46



stacktrace:

when to set the browseproduct:

"qtp1448780972-184@17506" prio=5 tid=0xb8 nid=NA runnable

java.lang.Thread.State: RUNNABLE

at com.yesasia.frontend.domain.BrowseResult.setProducts(BrowseResult.java:354)

at com.yesasia.frontend.service.browse.CloudBrowseServiceImpl.getBrowseResult(CloudBrowseServiceImpl.java:388)

at com.yesasia.frontend.service.browse.BrowseServiceImpl.getBrowseResult(BrowseServiceImpl.java:347)

at sun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethodAccessorImpl.java:-1)

at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)

at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)

at java.lang.reflect.Method.invoke(Method.java:498)

at org.springframework.aop.support.AopUtils.invokeJoinpointUsingReflection(AopUtils.java:309)

at org.springframework.aop.framework.ReflectiveMethodInvocation.invokeJoinpoint(ReflectiveMethodInvocation.java:183)

at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:150)

at org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:80)

at org.perf4j.aop.AbstractTimingAspect.doPerfLogging(AbstractTimingAspect.java:63)

at sun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethodAccessorImpl.java:-1)

at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)

at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)

at java.lang.reflect.Method.invoke(Method.java:498)

at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:621)

at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:610)

at org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:65)

at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:161)

at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:89)

at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:172)

at org.springframework.aop.framework.JdkDynamicAopProxy.invoke(JdkDynamicAopProxy.java:202)

at com.sun.proxy.$Proxy137.getBrowseResult(Unknown Source:-1)

at com.yesasia.frontend.rest.wicket.model.BrowseResultModel$1.load(BrowseResultModel.java:51)

at com.yesasia.frontend.rest.wicket.model.BrowseResultModel$1.load(BrowseResultModel.java:45)

at org.apache.wicket.model.LoadableDetachableModel.getObject(LoadableDetachableModel.java:124)

at com.yesasia.frontend.rest.wicket.model.BrowseResultModel.getBrowseResult(BrowseResultModel.java:114)

at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.getBrowseResult(BrowsingPage.java:276)

at com.yesasia.yesstyle.web.wicket.page.BrowsingPage$12.getEcommerceData(BrowsingPage.java:923)

at com.yesasia.frontend.rest.web.wicket.panel.googletagmanager.GoogleTagManager.createDataLayerKeyValueMapping(GoogleTagManager.java:285)

at com.yesasia.frontend.rest.web.wicket.panel.googletagmanager.GoogleTagManager.createJsonString(GoogleTagManager.java:170)

at com.yesasia.frontend.rest.web.wicket.panel.googletagmanager.GoogleTagManager.<init>(GoogleTagManager.java:95)

at com.yesasia.frontend.rest.web.wicket.panel.tracking.Tracking.createTrackingWithCondition(Tracking.java:85)

at com.yesasia.frontend.rest.web.wicket.panel.tracking.Tracking.<init>(Tracking.java:46)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.<init>(YsTemplatePage.java:281)

at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.<init>(BrowsingPage.java:146)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)







## ga4 phase4

for view item event:

1. We need to embem the JSON data on the listing page(and trigger the event later when user cliking the item), or we can not get the data below:

a. Retrieve the index on the product page.

b. We cannot trigger two events (view item and select item) on the same page.

c. stacktrace for page:

java.lang.Thread.State: RUNNABLE

at com.yesasia.frontend.rest.web.wicket.behavior.angularjs.GeDataAttributeModifier.<init>(GeDataAttributeModifier.java:19)

at com.yesasia.yesstyle.web.wicket.panel.product.lotinfoitems.lotinfoitemtemplate.LotInfoItemTemplate.createProductCoverLink(LotInfoItemTemplate.java:595)

at com.yesasia.yesstyle.web.wicket.panel.product.lotinfoitems.lotinfoitemtemplate.LotInfoItemTemplate.createLotInfoConatiner(LotInfoItemTemplate.java:266)

at com.yesasia.yesstyle.web.wicket.panel.product.lotinfoitems.lotinfoitemtemplate.LotInfoItemTemplate.<init>(LotInfoItemTemplate.java:187)

at com.yesasia.yesstyle.web.wicket.panel.product.lotinfoitems.lotinfoitem.LotInfoItem.<init>(LotInfoItem.java:25)

at com.yesasia.yesstyle.web.wicket.panel.product.lotinfoitems.LotInfoItems$1.populateItem(LotInfoItems.java:56)

```
2. after add the prodcut list json data for GA4 to listing page, there would be a issue if the url has the string like #/bt=37&s=10&bpt=299&l=1&pn=3&sb=136&bid=313208
```
2.1 there will trigger the ajax call to retrieve listing product again.

2.2 Stacktrace for JSON endpoint: this is the endpoint that is called by point 2.1.

"qtp1116264846-339@23866" prio=5 tid=0x153 nid=NA runnable

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.web.wicket.rest.domain.BrowseProductJsonData.setGoogleEcommerceProductClickTrack(BrowseProductJsonData.java:244)

at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.createBrowseProductJsonData(YsRestResourceServiceImpl.java:3877)

at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.createBrowseProductJsonData(YsRestResourceServiceImpl.java:3578)

at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.createBrandProductsJsonData(YsRestResourceServiceImpl.java:2937)

at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.getBrandProductsJsonData(YsRestResourceServiceImpl.java:603)

at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.getBrandProductsJsonData(YsRestResourceServiceImpl.java:585)

at com.yesasia.yesstyle.web.wicket.rest.resource.ProductsRestResource.getBrandDepartmentProducts(ProductsRestResource.java:192)

at com.yesasia.yesstyle.web.wicket.rest.resource.ProductsRestResource.getBrandDepartmentProducts(ProductsRestResource.java:155)

2.3 the angularjs will replace the new html to old one with new json data, this would cause our ga4-data losing.

2.4 and If the page number is greater than 1, YsRestResourceServiceImpl will be triggered.

3. There is a "compile" method in the JavaScript that allows for rendering the template again with new JSON data.

3.1 stack trace

compileTemplate (browse.js:328)

(anonymous) (browse.js:276)

(anonymous) (angular.js:16383)

$eval (angular.js:17682)

$digest (angular.js:17495)

$apply (angular.js:17790)

l (angular.js:11831)

J (angular.js:12033)

t.onload (angular.js:11966)

load (async)

(anonymous) (angular.js:11949)

n (angular.js:11776)

(anonymous) (angular.js:11571)

(anonymous) (angular.js:16383)

$eval (angular.js:17682)

$digest (angular.js:17495)

(anonymous) (angular.js:17721)

e (angular.js:5964)

(anonymous) (angular.js:6243)

setTimeout (async)

k.defer (angular.js:6241)

$evalAsync (angular.js:17719)

(anonymous) (angular.js:16291)

e (angular.js:16399)

then (angular.js:16347)

c (angular.js:11503)

m (angular.js:11468)

doRefreshBrowseResult (browse.js:43)

browseService.refreshBrowseResult (browse.js:81)

refresh (browse.js:257)

reloadPanelsForHashFilters (browse.js:212)

(anonymous) (browse.js:119)

b (angular.js:3207)

Sf (angular.js:3497)

d (angular.js:3485)

load (async)

h (angular.js:2796)

on (angular.js:3560)

O.<computed> (angular.js:3728)

ready (angular.js:3217)

(anonymous) (angular.js:31762)

(anonymous) (angular.js:6)

3.2 Therefore, we need to add the field in BrowseProductJsonData so that Angular can include it.

4. After using the "ga4-data" attribute in HTML, an error occurs.

4.1 agular.js:13920 SyntaxError: Expected property name or '}' in JSON at position 1

<a wicket:id="productCoverLink" ng-href="{{::lotinfoitem.url}}" ys-ge-click ge-data="{{::lotinfoitem.gepcTrack}}" ga4-data="{{::lotinfoitem.ga4pcTrack}}">

4.2 The issue is related to the ga4-data. We cannot use names that include numerical strings.

4.3 The rendering is fine after using ga-data.



5.there is performance issue when the logic write in the lotinfoitemtemplate, as it can be used in the listing page else.

so we will write ga4 logic in the LotInfoItem.







## yesstyleplguin upgrade









## redirect error

background:

user login will redirect to the es language page in the local server.

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi



finding:

1.why only happen in local:

since the css in uat and production using separate server to hold these file.

but local is monolith architecture, does not separate them.

2.the css file includes the xxx.jpg url to retrieve it.

3.and the url contians the es part of /res, so es will be the language.





stack trace:

sgin redirect:

at com.yesasia.yesstyle.web.wicket.rest.resource.AbstractYsRestResource.createSignInUpBasicJsonData(AbstractYsRestResource.java:1353)

at com.yesasia.yesstyle.web.wicket.rest.resource.MyAccountRestResource.processSignIn(MyAccountRestResource.java:466)

at com.yesasia.yesstyle.web.wicket.rest.resource.MyAccountRestResource.signIn(MyAccountRestResource.java:394)



set lasturl retrieving from cookies:

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.createRestContext(YsRestResourceServiceImpl.java:319)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.extractMethodParameters(AbstractFrontendRestResource.java:728)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.handleMethodExecution(AbstractFrontendRestResource.java:365)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.respond(AbstractFrontendRestResource.java:247)



update lasturl to the cookies:

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.web.wicket.page.AbstractYsWebPage.updateRequestUrlToLastUrlCookie(AbstractYsWebPage.java:1650)

at com.yesasia.yesstyle.web.wicket.page.AbstractYsWebPage.onAfterRender(AbstractYsWebPage.java:1554)

at com.yesasia.yesstyle.web.wicket.page.SplashPage.onAfterRender(SplashPage.java:152)



using _COOKIE_TYPE_LOCALE to determine the lang:

java.lang.Thread.State: RUNNABLE

at com.yesasia.rainbowfish.util.constant.Language$5.isLocaleMatched(Language.java:113)

at com.yesasia.rainbowfish.util.constant.Language.byLocale(Language.java:368)

at com.yesasia.yesstyle.web.wicket.page.SplashPage.determineLang(SplashPage.java:267)

at com.yesasia.yesstyle.web.wicket.page.AbstractYsWebPage.initLanguage(AbstractYsWebPage.java:2230)

at com.yesasia.yesstyle.web.wicket.page.AbstractYsWebPage.<init>(AbstractYsWebPage.java:392)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.<init>(YsTemplatePage.java:247)

at com.yesasia.yesstyle.web.wicket.page.SplashPage.<init>(SplashPage.java:75)



the influencers page update the cookies:

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.web.wicket.panel.bannerstack.Influencer.InfluencersBanner.createBannerLink(InfluencersBanner.java:78)

at com.yesasia.yesstyle.web.wicket.panel.bannerstack.Influencer.InfluencersBanner.<init>(InfluencersBanner.java:60)

at com.yesasia.yesstyle.web.wicket.panel.sidebar.promotiondialog.PromotionDialog.<init>(PromotionDialog.java:139)

at com.yesasia.yesstyle.web.wicket.panel.sidebar.SideBar$1.createContent(SideBar.java:49)

at com.yesasia.frontend.rest.web.wicket.markup.angularjs.template.AngularJsTemplate.createTemplateScriptContainer(AngularJsTemplate.java:45)

at com.yesasia.frontend.rest.web.wicket.markup.angularjs.template.AngularJsTemplate.<init>(AngularJsTemplate.java:28)

at com.yesasia.yesstyle.web.wicket.panel.sidebar.SideBar$1.<init>(SideBar.java:39)

at com.yesasia.yesstyle.web.wicket.panel.sidebar.SideBar.<init>(SideBar.java:39)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.createSideBar(YsTemplatePage.java:1750)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.createBody(YsTemplatePage.java:1522)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.<init>(YsTemplatePage.java:305)

at com.yesasia.yesstyle.web.wicket.page.AppIntroductionPage.<init>(AppIntroductionPage.java:25)



set es langauge:

java.lang.Thread.State: RUNNABLE

at com.yesasia.frontend.service.url.context.AbstractUrlContext.<init>(AbstractUrlContext.java:57)

at com.yesasia.frontend.service.url.context.ys.AbstractYsUrlContext.<init>(AbstractYsUrlContext.java:25)

at com.yesasia.frontend.service.url.context.ys.AbstractYsUrlContext.<init>(AbstractYsUrlContext.java:20)

at com.yesasia.frontend.service.url.context.ys.SimpleUrlContext.<init>(SimpleUrlContext.java:21)

at com.yesasia.frontend.service.url.support.YsSupport.parseRequestUrl(YsSupport.java:304 ,306[set filter],[308 get language from request]) ***

at com.yesasia.frontend.service.url.AbstractUrlService.parseRequestUrl(AbstractUrlService.java:91)

at com.yesasia.yesstyle.web.http.filter.IgSilver2021ApplicationFilter.doFilter(IgSilver2021ApplicationFilter.java:69)

at com.yesasia.yesstyle.web.http.filter.AbstractHttpFilter.doFilter(AbstractHttpFilter.java:39)

at org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1484)







## Dynamic coupon upload frequency amendments

background:

1. upload frequency change from 1 hour to half an hour.

2. the coupon description change.

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=100640



step:

1. ask db team to update the table

2. change the xml to update frequency.

3. update the sql in job1 to get description.



update sql:



bug:https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=101257

update YA_COUPON_CREATE_BATCH set COUPON_DATA = '<?xml version="1.0" encoding="UTF-8"?>

<coupon><campaignName>Dynamic_coupon_Cart_NC_PET</campaignName><description>Cart Coupon - 10% off</description><used>false</used>

<expirationDate>2023-05-16</expirationDate><currencyId>19</currencyId><percentageOff>0.1</percentageOff><minimumOrderAmount>35.0</minimumOrderAmount><createdDate>2022-05-12</createdDate>

<couponTypeId>2</couponTypeId><couponUsageTypeCode>F</couponUsageTypeCode><accountTypeId>5</accountTypeId><sites><pk><siteId>10</siteId></pk></sites></coupon>' where id = 366;





bug: https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=101783

update YA_COUPON_CREATE_BATCH set COUPON_DATA = '<?xml version="1.0" encoding="UTF-8"?>

<coupon><campaignName>Dynamic_coupon_Cart_RC_USD_PET</campaignName><description>Cart Coupon - $5 off</description><used>false</used>

<expirationDate>2023-05-16</expirationDate><amount>5.0</amount><currencyId>19</currencyId><minimumOrderAmount>40.0</minimumOrderAmount>

<createdDate>2022-05-12</createdDate><couponTypeId>1</couponTypeId><couponUsageTypeCode>O</couponUsageTypeCode><accountTypeId>19</accountTypeId>

<sites><pk><siteId>10</siteId></pk></sites></coupon>' where id = 364;



update YA_COUPON_CREATE_BATCH set COUPON_DATA = '<?xml version="1.0" encoding="UTF-8"?>

<coupon><campaignName>Dynamic_coupon_Cart_RC_EUR_PET</campaignName><description>Cart Coupon - €5 off</description><used>false</used>

<expirationDate>2023-05-16</expirationDate><amount>5.0</amount><currencyId>5</currencyId><minimumOrderAmount>35.0</minimumOrderAmount>

<createdDate>2022-05-12</createdDate><couponTypeId>1</couponTypeId><couponUsageTypeCode>O</couponUsageTypeCode><accountTypeId>19</accountTypeId>

<sites><pk><siteId>10</siteId></pk></sites></coupon>' where id = 365;



update YA_COUPON_CREATE_BATCH set COUPON_DATA = '<?xml version="1.0" encoding="UTF-8"?>

<coupon><campaignName>Dynamic_coupon_Cart_NC_PET</campaignName><description>Cart Coupon - 10% off</description><used>false</used>

<expirationDate>2023-05-16</expirationDate><currencyId>19</currencyId><percentageOff>0.1</percentageOff><minimumOrderAmount>35.0</minimumOrderAmount><createdDate>2022-05-12</createdDate>

<couponTypeId>2</couponTypeId><couponUsageTypeCode>F</couponUsageTypeCode><accountTypeId>19</accountTypeId><sites><pk><siteId>10</siteId></pk></sites></coupon>' where id = 366;







## RFM Model

wiki:

https://wiki.yawin.yesasia.com/wiki/index.php/Frontend:Projects:2022:RFM_Reactivation_Campaign

background:

https://yawin-my.sharepoint.com/:p:/g/personal/martina_lau_yesstyle_com/EcRnAtgU3xdFol8k24BPkFMBFyceOHWoUwI-z1jYPkVn_g

https://yawin-my.sharepoint.com/:x:/g/personal/bonnie_chiu_yesstyle_com/EexrNrpBQCNOmgvVAuQb5loBzXerTTBUdCjSmUJ-4tk3UQ?isSPOFile=1

https://yawin-my.sharepoint.com/:x:/g/personal/bonnie_chiu_yesstyle_com/ESPclNo8belFgbGRlKNJxrcBX4UlXuX8hu8UHRD6hfe_Gg







overall:

there are some customers that have purchased product more than 3 months for last purchase date, this feature is used to bring them back.





FTP:

server: yav1qv3-sftp.responsys.ocs.oraclecloud.com

user name: yesstylec_scp

path: /home/cli/yesstylec_scp/RFM_offer_segment





Classification:

there are 3 aspect to split the custoemr.

1.recency, the latest order user made difference with last purchase.

2.frequency, how many orders they made in the life time.

3.Monetary, how much they totally spend in the life time.



base on the 3 aspect there are 5 segments to be used.

1. Lapsed -1​

2. Lapsed - 2​

3. Engaged​

4. Potential​

5. Opportunity​



in each segment we can use the group to divide them.

also base on the 3 aspect and the last purchase date,

given first one (recency), let another two fator to be vairant to change.



also the memebr type(regular,bronze,silver,glod) can be a factor how to warm them up.



Strategy:

giving coupon and point to attract them to purchase again.

each segment has difference strategy to attract custoemr to purchase again.

and the segmentation is done on the oracle side powered by lister.

we only need to do is read the csv file and create coupon to them and write the csv file and upload to the server.





sql:

---recency

select * from dm_0551_shopper where latest_order_dt < SYSDATE - interval '90' day order by latest_order_dt desc;



select count(*) from dm_0551_shopper;



select count(*) from YA_SHOPPER_EMARSYS_CONTACT;



---frquence

select * from ya_order yo1 where shopper_id in(

select shopper_id from ya_order group by shopper_id having count(shopper_id) >1) ;



select count(shopper_id),shopper_id from ya_order group by shopper_id having count(shopper_id) > 4 ;



---value

SELECT Sum(ol.unit_price)        total,

oi.origin_order_id        origin_order_id,

Count(oi.origin_order_id) sku

FROM   order_info oi

LEFT JOIN order_line ol

ON oi.id = ol.order_info_id

WHERE  oi.origin_order_id IN (SELECT To_char(yo1.order_num)

FROM   ya_order yo1

JOIN (SELECT yo.shopper_id shopper

FROM   ya_order yo

WHERE  yo.created_datetime > To_date(

'08/24/2022 07:30:00',

'MM/DD/YYYY HH24:MI:SS')

AND yo.created_datetime <

To_date(

'08/25/2022 09:00:00',

'MM/DD/YYYY HH24:MI:SS')

GROUP  BY yo.shopper_id

HAVING Count(yo.shopper_id) > 0) t1

ON yo1.shopper_id = t1.shopper)

GROUP  BY oi.origin_order_id

ORDER  BY total DESC;





--[ya_order.order_num = order_info.origin_order_id], [order_info.id = ol.order_info_id]



SELECT Sum(ol.unit_price) total,

oi.cust_id shopper,

(

SELECT Count(*)

FROM ya_order

WHERE oi.cust_id = shopper_id

and created_datetime > To_date('08/24/2022 07:30:00', 'MM/DD/YYYY HH24:MI:SS')

AND created_datetime < To_date('08/25/2022 09:00:00', 'MM/DD/YYYY HH24:MI:SS') --order count between these date

) order_count

FROM order_info oi

LEFT JOIN order_line ol

ON oi.id = ol.order_info_id

WHERE oi.cust_id IN (

SELECT To_char(yo1.shopper_id)

FROM ya_order yo1

JOIN

(

SELECT yo.shopper_id shopper

FROM ya_order yo

WHERE yo.created_datetime > To_date('08/24/2022 07:30:00', 'MM/DD/YYYY HH24:MI:SS')

AND yo.created_datetime < To_date('08/25/2022 09:00:00', 'MM/DD/YYYY HH24:MI:SS')  --get shopper purchased at these date

GROUP BY yo.shopper_id

HAVING Count(yo.shopper_id) > 2

) t1

ON yo1.shopper_id = t1.shopper

)

and oi.order_dt > To_date('08/24/2022 07:30:00', 'MM/DD/YYYY HH24:MI:SS')

and oi.order_dt < To_date('08/25/2022 09:00:00', 'MM/DD/YYYY HH24:MI:SS') -- total amount at these date

GROUP BY oi.cust_id

ORDER BY total DESC;





code:

---table

three new:

YA_COUPON_ORA_RFM_JOB, YA_COUPON_ORA_RFM_AUDIENCE, YA_COUPON_ORA_RFM_LOG

two old:

YA_COUPON_CREATE_BATCH, YA_COUPON

YA_COUPON_CREATE_BATCH add the new feild offer_segment_id varchar2(20) NULL.

---ExchangeSupportImpl

for upload and download file from remoet server

opensession -> connect the remote server

import com.jcraft.jsch.Channel;

import com.jcraft.jsch.ChannelSftp;

import com.jcraft.jsch.HostKey;

import com.jcraft.jsch.JSch;

import com.jcraft.jsch.Session;

import com.opencsv.CSVReader;

import com.opencsv.CSVWriter;

import org.apache.commons.io.IOUtils;

import org.apache.commons.logging.Log;

import org.apache.commons.logging.LogFactory;

import org.springframework.core.io.ClassPathResource;



private Session openSession() throws Exception {

JSch jsch = new JSch();

if (CHECK_SERVER_HOST_KEY) {

jsch.getHostKeyRepository().add(new HostKey(

SFTP_SERVER_HOST, SFTP_SERVER_HOST_KEY_BYTE_ARRAY), null);

}

byte[] privateKeyBytes = IOUtils.toByteArray(

(new ClassPathResource(SFTP_SERVER_IDENTITY).getInputStream()));

jsch.addIdentity("name", privateKeyBytes, (byte[]) null, (byte[]) null);



Session session = jsch.getSession(

SFTP_SERVER_USER_NAME, SFTP_SERVER_HOST,

Integer.parseInt(SFTP_SERVER_PORT));

session.setConfig("PreferredAuthentications", "publickey");

session.setConfig("StrictHostKeyChecking",

CHECK_SERVER_HOST_KEY ? "yes" : "no");

session.connect();

return session;

}



read csv file:

public List<String[]> readFromFtpCsvFile(String audienceFilePath) throws Exception {

Session session = null;

Channel channel = null;

List<String[]> data = Collections.emptyList();

try {

session = openSession();

channel = session.openChannel("sftp");

channel.connect();

ChannelSftp channelSftp = (ChannelSftp) channel;

InputStream is = channelSftp.get(audienceFilePath);

CSVReader reader = new CSVReader(new BufferedReader(

new InputStreamReader(is, StandardCharsets.UTF_8)), ',');

data = reader.readAll();

reader.close();

} finally {

if (channel != null) {

channel.disconnect();

}

if (session != null) {

session.disconnect();

}

}

return data;

}



upload csv:

public void writeToFtpCsvFile(String couponCodeFilePath, List<String[]> data) throws Exception {

Session session = null;

Channel channel = null;

try {

session = openSession();

channel = session.openChannel("sftp");

channel.connect();

ChannelSftp channelSftp = (ChannelSftp) channel;

OutputStream os = channelSftp.put(couponCodeFilePath);

CSVWriter csvWriter = new CSVWriter(

new BufferedWriter(new OutputStreamWriter(os)),

',', '"', '"', "\r\n");

csvWriter.writeAll(data);

csvWriter.close();

} finally {

if (channel != null) {

channel.disconnect();

}

if (session != null) {

session.disconnect();

}

}

}



---AbstractRfmReactivationCampaignScheduleJob

the job will update the status after each step finished.

flow:

```
1. #execute -> read the CSV from remote server according segment list from RfmReactivationCampaignSegment2ScheduleJob#getOfferSegmentIdList,
```
```
and create a couponOracleRfmJob object for each segment retrieve from #getOfferSegmentIdList.
```
```
2. #processJob -> get the couponOracleRfmJob from table by AudienceFileName, if not exist create it into the YA_COUPON_ORA_RFM_JOB table.
```
```
3. #nextProcess -> according to the job status to process difference action, below is the name of the action method.
```
switch (job.getStatus()) {

case CREATED_JOB:

importCsv(job);

break;

case IMPORTED_CSV:

createCoupon(job);

break;

case CREATED_COUPON:

exportCsv(job);

break;

case EXPORTED_CSV:

finalizeJob(job);

break;

case FINISHED_JOB:

break;

default:

throw new Exception("nextProcess - Unexpected job status = " + job.getStatus());

}

```
4. #importCsv -> read the csv from remote server and create every record from the CSV into YA_COUPON_ORA_RFM_AUDIENCE table, finish successfully mark it as IMPORTED_CSV.
```
```
5. #createCoupon ->
```
5.1 read the record from YA_COUPON_ORA_RFM_AUDIENCE table and CouponCreateBatch table to gen the coupon.

5.2 if the both record exist, getValidationPeriodNumber and getValidationPeriodUnit to determine the expirationDate for that coupon.

5.3 create coupon according to the CouponCreateBatch xml, assign it to the user with ya_coupon table, and update CouponOracleRfmAudience table for coupon_code, start_date,end_date.

5.4 create record into CouponOracleRfmLog table and for auditting purpose, and update audience

5.5 using trasction to insert and update it.

5.6 mark the job status as CREATED_COUPON

```
6. #exportCsv -> read the CouponOracleRfmAudience table to get the all record for current job, and using CSVWriter to output csv formmat data. mark status as EXPORTED_CSV
```
```
7. #finalizeJob clean up YA_COUPON_ORA_RFM_AUDIENCE table for current job. mark status as FINISHED_JOB.
```






## email preference



background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=103609

All newly registered customer email permission will default to opt in, and after 14 days if they still hasn't subscribed to emails then change to opt-out.





data structure for data:

Map<Site, ValuePair<List<Integer>, List<Integer>>>

Key is site = YS:

Value is ValuePair(like Map)

Key is which email for subscribe

Value is which email for unsubcribe





table:

ya_newsletter_subscriber



find the proceduer or function for responsys:

```
MasterContactListEmailPermissionUpdateScheduleJob#getIdsForSynchronization
```


enhancement:

1. add one more subquery in the sql to retrieve account before 14 days.

1.1 select shopper_id from ya_shopper where ? <= CREATED_DATE and CREATED_DATE <= ?)

1.2 Date dayBeforeLastUpdatedTime = getDayBeforeThatDay(lastUpdatedTime, 14);

Date dayBeforeLastTargetTime = getDayBeforeThatDay(targetEndTime, 14);

1.3	Date getDayBeforeThatDay(Date dateInstance, int days) {

if (dateInstance == null) {

dateInstance = new Date();

}

Calendar cal = Calendar.getInstance();

cal.setTime(dateInstance);

cal.add(Calendar.DATE, -days);

return cal.getTime();

}

2. add the logic for reset the email preference as user selected in the business logic part.

2.1   // get shopper model and check the creation date less than 14 days from current.

Shopper shopper = getMyAccountService().getShopperByShopperId(shopperId);

boolean withinFourteenDayUser = false;



if (shopper != null && shopper.getCreatedDate() != null) {

Date today = new Date();

if(shopper.getCreatedDate().before(today)){

withinFourteenDayUser

= DateUtil.dayDiff(today,

shopper.getCreatedDate()) < 13;

}

}

2.2 upload the flag:

Boolean emailPermission

= newslettersMapping.get(NewsletterType.YS_MONTHLY)

|| newslettersMapping.get(NewsletterType.YS_LOYALTY_PROGRAM)

|| newslettersMapping.get(NewsletterType.YS_NEW_PRODUCTS)

|| withinFourteenDayUser;





stack:

update the the email preference in frontend page:

java.lang.Thread.State: RUNNABLE

at com.yesasia.angelfish.dao.hibernate.NewsletterDaoImpl.updateNewsletterPreferences(NewsletterDaoImpl.java:288)

at com.yesasia.frontend.service.newsletter._angelfish.NewsletterManager.updateNewsletterSubscriptions(NewsletterManager.java:184)

at com.yesasia.angelfish.memcached.annotation.DisableCacheAspect.disbaleCache(DisableCacheAspect.java:40)

at com.yesasia.frontend.service.newsletter.NewsletterServiceImpl.updateNewsletterSubscriptions(NewsletterServiceImpl.java:288)

at com.yesasia.yesstyle.web.wicket.rest.resource.myaccount.NewsletterRestResource.subscribeNewsletter(NewsletterRestResource.java:85)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.invokeMappedMethod(AbstractFrontendRestResource.java:798)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.handleMethodExecution(AbstractFrontendRestResource.java:404)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.respond(AbstractFrontendRestResource.java:247)



test account:

emailpertest@yopmail.com







##  [CRM] Update Tier 3 Category Names with H1 Titles in Oracle data tables

background:

```
https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=104027#c1
```
upload the H1 title to responsys instead of the country vaule.



class:

LocalisedCategoryNameScheduleJob







##  [CRM] Bug 105315 Member birthday month checking

background:

customer may change the birthday month:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=105315



checking step:

https://uat.yesstyle.com/en/birthday-gift.html -> birthday page, customer can entry when he did not claim the reward.

birthdayGiftPage is the data to record user has claimed the gift before.



confusion:

for birthdayGiftPage, user may be granted with birthday point but without birthday gift, so for this case, user can not go to birthday-gift page.

after launch, user can go to the birthday-gift, even though they received the point and gift.





## Cant add to bag by using YS app---

Background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=105427

user go to PDP, and click add to page will pop up a option page, in this page user select another SKU which has discount will cause this issue.



reason:

in the PDP, when user select another option which let the page rebuilt will lead this issue happened.

the last context in this page will dispose after the rebuild, so if the product option list still use last context will cause this issue.



fix:

not using the setstate method.





## CRM Welcome email sent to deleted account

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=105628

the welcome email will send to guest account and let him to register, or send to regular account with some discount.

but the email still received even account deleted.



reason:

1. user click close account in storefront page.

2. storefront page will post a request to CRM to tell the account will need to delete

3. CRM will set the member_type to 3 which mean deleted account.

4. if the account login will be blocked as the member_type is being deleted.



the flow:

user close account in storefront -> storefront server send the delete request to CRM(backend)

-> the CRM will review the request -> review completed will send the request to oracle to delete the record in master contact list

-> and delete the record in DB.





## Bug 105740 cust can not access shopping bag

Background:

```
https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=105740#c2
```
the error is null pointer exception, the user go to shopping bag page will throw the error since the claimedGiftProudctvalid error



how to check the server log before cloud watch run:

1. go to DB to chech the user last login datetime.

2. go the server (for non-peak time, the server amount is  12), find the log (FE:/opt/ys.apache-tomcat-7.0.96/logs, CO: /opt/co.ys.apache-tomcat-7.0.96/logs)

3. grep that log like : cat server._2023-01-13_03.24.35.log.2023-01-14 | grep '2c98808280036836018008add82a01f2'

4. if the log found, download the whole log in local.

5. seach the user id in the downloaded log, you may find the error before or after the user id logged.



get the shopping bag sql:

select * from ya_shopper where email = 'a-safwani@hotmail.com';



select* from ya_new_basket where shopper_id in (select shopper_id from ya_shopper where email = 'a-safwani@hotmail.com');



select * from YA_CLAIMED_BIRTHDAY_GIFT where shopper_id = '2c98808280036836018008add82a01f2';



select * from ya_product where sku = '1112781794';



select * from ya_prod_attr where sku = '1112781794';



get the birthday item:

select * from ya_product yp left join ya_prod_attr ypa on yp.sku = ypa.sku where ypa.attribute_id = '90319';



insert the birthday product:

insert into ya_new_basket (shopper_id,site_id,sku,quantity,created_datetime,type) VALUES

('2c9380827d36e1aa017d36e48ada0001',10,'1112781253',1,sysdate,3);







## sync key

background:

Bug 104391 [YS APP] Order Notifications Screen - No result case handling - https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=104391

Bug 104330 Update content for ES APP - https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=104330

sync the key to change the hard text



where to check:

1.signin bottom sheet dialog (3 keys)

2.signin with apple use asset key

3.order notification use asset key





## change the currency sign for some languages

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=105773

want to align the  currency display on the bar and  the description.



stacktrace:

"qtp1633717786-280@24377" prio=5 tid=0x118 nid=NA runnable

java.lang.Thread.State: RUNNABLE

at com.yesasia.frontend.rest.wicket.util.FrontendStringResourceModel.getString(FrontendStringResourceModel.java:257)

at com.yesasia.frontend.rest.wicket.util.FrontendStringResourceModel.getString(FrontendStringResourceModel.java:247)

at com.yesasia.frontend.rest.wicket.util.FrontendStringResourceModel.load(FrontendStringResourceModel.java:435)

at com.yesasia.frontend.rest.wicket.util.FrontendStringResourceModel.load(FrontendStringResourceModel.java:28)

at org.apache.wicket.model.LoadableDetachableModel.getObject(LoadableDetachableModel.java:124)

at com.yesasia.frontend.rest.wicket.util.StringResourceUtil.getString(StringResourceUtil.java:84)

at com.yesasia.frontend.rest.wicket.util.display.WicketApplicationAwareStringResourceDisplayer.display(WicketApplicationAwareStringResourceDisplayer.java:179)

at sun.reflect.GeneratedMethodAccessor470.invoke(Unknown Source:-1)

at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)

at java.lang.reflect.Method.invoke(Method.java:498)

at org.apache.wicket.proxy.LazyInitProxyFactory$JdkHandler.invoke(LazyInitProxyFactory.java:484)

at com.sun.proxy.$Proxy254.display(Unknown Source:-1)

at com.yesasia.frontend.rest.web.wicket.panel.AbstractFrontendPanel.displayByResourceKey(AbstractFrontendPanel.java:86)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.summary.eliteclubinfo.EliteClubInfoNew.createInfluencerCumulateInfo(EliteClubInfoNew.java:491)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.summary.eliteclubinfo.EliteClubInfoNew.createMembershipInfoContainer(EliteClubInfoNew.java:418)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.summary.eliteclubinfo.EliteClubInfoNew.createEliteClubInfoContainer(EliteClubInfoNew.java:343)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.summary.eliteclubinfo.EliteClubInfoNew.<init>(EliteClubInfoNew.java:145)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.summary.Summary.<init>(Summary.java:87)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.maincontent.member.Member.createMainContent(Member.java:60)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.maincontent.member.Member.<init>(Member.java:51)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.maincontent.MainContent.createMainContent(MainContent.java:55)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.maincontent.MainContent.<init>(MainContent.java:47)

at com.yesasia.yesstyle.web.wicket.page.AccountPage.<init>(AccountPage.java:50)

at com.yesasia.yesstyle.web.wicket.page.accountpage.SummaryPage.<init>(SummaryPage.java:25)





## asset key

background:

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=106227

update the asset key



what is asset:

There are a lot of texts and paragraphs in the website, and the same texts are usually appear in different pages.

To group these texts together and coordinate them easily, we would like to save all these text(we call them asset in this project)

of different languages in the database, and generate a .properties file for the website to reference.





methodology:

search jewelfish in the wiki (https://wiki.yawin.yesasia.com/wiki/index.php/Special:Search?search=Jewelfish&go=Go)





what need to do for this bug:

1. check the display logic for this key.

2. the meaning of the all parameters.

3. the key used in where.



answer:

1. the key ac.eliteClub.upgraded.accumulatedSpendingCarriedOver would only be used on the My account page (web and app).



2. it is used in App also.



the display logic is the member type of the customer not Regular, Gold, and Influencer.



{0} represents the current EliteClub Member Type

{1} represents the start date of the EliteClub MemberShip

{2} represents the cumulative spending - current spending







## abw failed to place order

background:

[ABW] Failed to place order / keep being asked to login https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=106280

Customer [arewaobirin21@gmail.com] is asked to login again and again. She added items to the shopping cart, but when she clicked 'check out',

she was logged out again. Once she is logged in, the item added to the cart disappeared.



reason:

p1. the user add the US product to cart, but using the HK address to checkout.



f1. user [arewaobirin21@gmail.com] has a invalid product (free gift - 1118046637 item is no longer available) and a product(1078919512) not available for HK region.

when she try to checkout with default HK region (preferred_ship Y), the invalid product will trigger the auto signout logic with her account,

and the item(1078919512) will be removed as the item not available for Hk region.

so the reason may combine two case, invalid product and the product not available for HK region.



f2. user [arewaobirin21@gmail.com] has a product(1078919512) not available for HK region in her basket.

when she try to checkout with default HK region (preferred_ship Y), will trigger auto signout logic with her account,

and the item(1078919512) will be removed as the item not available for Hk region.

so the case can be reproduce with the step above.





log1

2023-02-06 09:18:49,208 INFO  com.yesasia.checkout.mobileweb.wicket.page.checkouttemplatepage.SignInPage - [EBB8CC46D86FEB0ED29A80AFD5757403, ABW, 2c93808282c4c5f60182c6ccd9420012] signIn[email=arewaobirin21@gmail.com, isWithPayPal=false] success

2023-02-06 09:18:49,352 INFO  com.yesasia.checkout.mobileweb.wicket.page.checkouttemplatepage.OrderPlacingPage - [EBB8CC46D86FEB0ED29A80AFD5757403, ABW, 2c93808282c4c5f60182c6ccd9420012, 17647542, GoInterpayDeviceFingerprint=9fe6b4b3-1be5-4741-92d4-6087e99a2b3f] initBasketModel, moveCookieToDatabase - start:Mon Feb 06 09:18:49 GMT 2023

2023-02-06 09:18:49,352 INFO  com.yesasia.checkout.mobileweb.wicket.page.checkouttemplatepage.OrderPlacingPage - [EBB8CC46D86FEB0ED29A80AFD5757403, ABW, 2c93808282c4c5f60182c6ccd9420012, 17647542, GoInterpayDeviceFingerprint=9fe6b4b3-1be5-4741-92d4-6087e99a2b3f] initBasketModel, moveCookieToDatabase - end:Mon Feb 06 09:18:49 GMT 2023

2023-02-06 09:18:49,352 INFO  com.yesasia.checkout.mobileweb.wicket.page.checkouttemplatepage.OrderPlacingPage - [EBB8CC46D86FEB0ED29A80AFD5757403, ABW, 2c93808282c4c5f60182c6ccd9420012, 17647542, GoInterpayDeviceFingerprint=9fe6b4b3-1be5-4741-92d4-6087e99a2b3f] initBasketModel, persistBasket, containsInvalidProducts - start:Mon Feb 06 09:18:49 GMT 2023

2023-02-06 09:18:49,357 INFO  com.yesasia.checkout.mobileweb.wicket.page.checkouttemplatepage.OrderPlacingPage - [EBB8CC46D86FEB0ED29A80AFD5757403, ABW, 2c93808282c4c5f60182c6ccd9420012, 17647542, GoInterpayDeviceFingerprint=9fe6b4b3-1be5-4741-92d4-6087e99a2b3f] initBasketModel, persistBasket, containsInvalidProducts - end:Mon Feb 06 09:18:49 GMT 2023

2023-02-06 09:18:49,357 INFO  com.yesasia.checkout.mobileweb.wicket.page.checkouttemplatepage.OrderPlacingPage - [EBB8CC46D86FEB0ED29A80AFD5757403, ABW, 2c93808282c4c5f60182c6ccd9420012, 17647542, GoInterpayDeviceFingerprint=9fe6b4b3-1be5-4741-92d4-6087e99a2b3f] warning: auto sign out due to all basket items become invalid





sql:

site id or type id = 28 is abw.

check the ban shipping list:

select * from ya_ban_ship_country_prod where prod_id = 1078919512; -- prodcut level

select * from Ya_Ban_Ship_Country_Brand where brand_id in (select brand_id from ya_product where sku = 1078919512); -- brand level

select * from ya_ban_ship_country_supplier where supplier_id in (select supplier_id from prod_region where prod_id = 1078919512 and origin_id = 28); -- supplier level

select * from ya_attribute_lang where lang_id = 1 and attribute_id in (select attribute_id from ya_prod_attr where sku = 1078919512); -- attribute level

select * from ya_address where shopper_id = '2c93808282c4c5f60182c6ccd9420012'; --check shipping address



select * from ya_shopper where email = 'arewaobirin21@gmail.com';

select * from ya_new_basket where shopper_id = '2c93808282c4c5f60182c6ccd9420012';

select * from ya_shopper_site_preference where shopper_id = '2c93808282c4c5f60182c6ccd9420012';

select * from ya_order where  shopper_id = '2c93808282c4c5f60182c6ccd9420012';







## Bug 106526 [B2B2C] skip USD250 MOA for castlers shopper id

background:

Regarding to the ABW B2B2C project, would you help to do the setting and skip the MOA USD250 for below shopper id:

CS.beauty@castlers.com

skip the product minimum amount checking for this user.



flow:

1.com/yesasia/asianbeautywholesale/web/wicket/rest/service/resource/ShoppingBagRestResourceServiceImpl.java:324

set the setShowOrderAmountNote flag for the shoppingBagItemsJsonData. (.isBasketInvalidToMinimalOrderAmount)

```
2.com.yesasia.asianbeautywholesale.web.wicket.panel.shoppingbagpage.maincontent.MainContent#createShoppingBagConfig
```
set the shoppingBag to angular $scope.

```
3.com.yesasia.asianbeautywholesale.web.wicket.panel.shoppingbagpage.bagsummary.BagSummary#createOrderAmountError set the element attribute to check the MOA(the main swich)
```
4.asianbeautywholesale-war/src/main/webapp/scripts/shoppingbag.js:15 -> $scope.shoppingBag = abwApp.config.shoppingBag;

set the  abwApp.config.shoppingBag to $scope.shoppingBag which can be use later.

4.asianbeautywholesale-war/src/main/webapp/scripts/shoppingbag.js:276 will use angular.js to verify the MOA need to show or not.







## YS Birthday Gift Project

background:

some conutry can not apply the birthday coupon, so we need to give them a tips.

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=99248





step:

1.find the birthday-gift page and corresponding class  the url = birthday-gift.html

2.find the UI code change and copy to the wicket

3.add the asset key on it, since there may be another birthday gift box use it, we need to invisible the component if the type not free shipping.





stack:

get drop menu

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.web.wicket.rest.service.resource.BirthdayGiftRestResourceServiceImpl.getBirthdayGiftsJsonData(BirthdayGiftRestResourceServiceImpl.java:125)

at sun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethodAccessorImpl.java:-1)

at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)

at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)

at java.lang.reflect.Method.invoke(Method.java:498)

at org.apache.wicket.proxy.LazyInitProxyFactory$JdkHandler.invoke(LazyInitProxyFactory.java:484)

at com.sun.proxy.$Proxy301.getBirthdayGiftsJsonData(Unknown Source:-1)

at com.yesasia.yesstyle.web.wicket.page.BirthdayGiftPage$3.load(BirthdayGiftPage.java:117)

at com.yesasia.yesstyle.web.wicket.page.BirthdayGiftPage$3.load(BirthdayGiftPage.java:110)

at org.apache.wicket.model.LoadableDetachableModel.getObject(LoadableDetachableModel.java:124)

at com.yesasia.yesstyle.web.wicket.page.BirthdayGiftPage.getBirthdayGiftJsonData(BirthdayGiftPage.java:75)

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.MainContent.<init>(MainContent.java:45)

at com.yesasia.yesstyle.web.wicket.page.BirthdayGiftPage.<init>(BirthdayGiftPage.java:61)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)



get free shipping component

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.giftcard.GiftCardWithContent.createGiftCardContent(GiftCardWithContent.java:41)

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.giftcard.GiftCard.createGiftCard(GiftCard.java:135)

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.giftcard.GiftCard.createGiftCardContainer(GiftCard.java:106)

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.giftcard.GiftCard.<init>(GiftCard.java:74)

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.giftcard.GiftCardWithContent.<init>(GiftCardWithContent.java:34)

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.MainContent.createGiftChoices(MainContent.java:122)

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.MainContent.createBirthdayGiftContainer(MainContent.java:61)

at com.yesasia.yesstyle.web.wicket.panel.birthdaygiftpage.MainContent.<init>(MainContent.java:46)

at com.yesasia.yesstyle.web.wicket.page.BirthdayGiftPage.<init>(BirthdayGiftPage.java:61)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)







## nextjs review

background:

revam the PDP using next.js framework



before start:

Understanding the relationship between dynamicDB, saerch engine and oracle DB.

1.DynamicDB is nosql hosted by AWS, you can seem it as MongoDB

2.search engine is elasticsearch, load the data from dynamicDB and indexing, so there will have data on search engine.

3.oracleDB, get the reviewID from search engine and get the full body from oracleDB.



Understanding the keypoint:

1. get review from search enginee

2. load review from db according the id from search enginee.

3. using displayService to convert the string and avoid invalid string that has XSS.

4. for ssr, implement a method with cache via the CacheInternalObject annotation.

5. how to convert model to data.

6.will unique it in the m_reviewIdNCustomerReviewModel



old-flow:

1.prodcut page will render the first page review data.

2.the rest api will do the other page.



new-flow:

1.server side rendering 12 items,

2.using useEffect to fetch more items when user click load more.



prepare data:

1. sync the prodc dynamicDB to UAT	(aws)

2. sync the customer reiview to UAT (oracle)

3. find the sku which contains below case.

with Text review

with Video review

with Image review

with beauty profile

reviews group by reviewer

vote helpful

voted case

4. the class for indexer [ElasticsearchIndexCustomerReviewTest_dev]





for nextjs:

1.change the FE_PRIVATE_API_END_POINT in .env.development flie  to point it as local address.

2.using the dynamic import for review section as the perform issue we can not use the ssr.

3.esacape the review string will be done by reactjs

4.AssetsController in the springboot can be used to implement the i18n.





for springboot:

1. if need to change the search engine and DB from UAT to Prod, set the url frontend-cloud\cloud-service\src\main\resources\application.properties

2. add the browse.generalCloudRestUrl value to all application.properties, prod and uat have difference value.

```
3. copy com.yesasia.frontend.service.browse.CloudBrowseServiceImpl#getReviewerBrowseResult to BrowseServiceImpl in the new springboot project.
```
4. breakdown the CustomerReviewersModel to be the service method, as the CustomerReviewersModel is the cache model.





test url:

https://it-vincentc.yawin.yesasia.com:8443/rest/customer-review/v1/reviewer-reviews?pageNum=1&reviewProductId=1052684695&reviewerRatingFilterOptionId=8&sortByOptionId=130



sql:

select concat (concat (shopper_id,'_'),sku)from ya_customer_review where sku = 1073879287;



old-flow:

restful for web:

1.using filter(option like start,date,relevant,helpful) to load the BrowseResult(include the review id) from elasticsearch

java.lang.Thread.State: RUNNABLE

at com.yesasia.frontend.service.browse.CloudBrowseServiceImpl.getReviewerBrowseResult(CloudBrowseServiceImpl.java:747)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel.getCloudBrowseResult(CustomerReviewersModel.java:884)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel.access$400(CustomerReviewersModel.java:51)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel$1.load(CustomerReviewersModel.java:328)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel$1.load(CustomerReviewersModel.java:246)

at org.apache.wicket.model.LoadableDetachableModel.getObject(LoadableDetachableModel.java:124)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel.getReviewersBrowseResult(CustomerReviewersModel.java:635)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel.getCurrentPageNum(CustomerReviewersModel.java:643)

at com.yesasia.frontend.rest.service.resource.AbstractRestResourceServiceImpl.createReviewerReviewsJsonData(AbstractRestResourceServiceImpl.java:4309)

at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.getReviewerReviewsJsonData(YsRestResourceServiceImpl.java:469)

at com.yesasia.yesstyle.web.wicket.rest.resource.CustomerReviewRestResource.getReviewerReviews(CustomerReviewRestResource.java:105)

at sun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethodAccessorImpl.java:-1)

at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)

at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)

at java.lang.reflect.Method.invoke(Method.java:498)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.invokeMappedMethod(AbstractFrontendRestResource.java:798)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.handleMethodExecution(AbstractFrontendRestResource.java:404)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.respond(AbstractFrontendRestResource.java:247)



2.using id got by step 1 to load DB to retrieve the CustomerReview

java.lang.Thread.State: RUNNABLE

at com.yesasia.frontend.rest.service.resource.AbstractRestResourceServiceImpl.createReviewerReviewsJsonData(AbstractRestResourceServiceImpl.java:4361)

at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.getReviewerReviewsJsonData(YsRestResourceServiceImpl.java:469)

at com.yesasia.yesstyle.web.wicket.rest.resource.CustomerReviewRestResource.getReviewerReviews(CustomerReviewRestResource.java:105)

at sun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethodAccessorImpl.java:-1)

at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)

at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)

at java.lang.reflect.Method.invoke(Method.java:498)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.invokeMappedMethod(AbstractFrontendRestResource.java:798)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.handleMethodExecution(AbstractFrontendRestResource.java:404)

at com.yesasia.frontend.rest.resource.AbstractFrontendRestResource.respond(AbstractFrontendRestResource.java:247)



```
3.load more will call com.yesasia.yesstyle.web.wicket.rest.resource.CustomerReviewRestResource#getReviewerReviews
```




restful for app:

```
com.yesasia.yesstyle.app.wicket.rest.resource.AppCustomerReviewRestResource#getReviewerReviews
```






ssr

1.get review from serach engine and based on it create CustomerReviewersModel

java.lang.Thread.State: RUNNABLE

at com.yesasia.frontend.service.browse.CloudBrowseServiceImpl.getReviewerBrowseResult(CloudBrowseServiceImpl.java:747)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel.getCloudBrowseResult(CustomerReviewersModel.java:884)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel.access$400(CustomerReviewersModel.java:51)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel$1.load(CustomerReviewersModel.java:328)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel$1.load(CustomerReviewersModel.java:246)

at org.apache.wicket.model.LoadableDetachableModel.getObject(LoadableDetachableModel.java:124)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel.getReviewersBrowseResult(CustomerReviewersModel.java:635)

at com.yesasia.frontend.rest.wicket.model.CustomerReviewersModel.getProductReviewRatingScore(CustomerReviewersModel.java:618)

at com.yesasia.yesstyle.web.wicket.page.ProductPage$16.createAggregateRating(ProductPage.java:1115)

at com.yesasia.yesstyle.web.wicket.page.ProductPage$16.createProductJsonLdScheme(ProductPage.java:1083) --> retrieve and get whole review

at com.yesasia.frontend.rest.web.wicket.panel.jsonld.context.ProductPageJsonLdContext.getExtraJsonLdScheme(ProductPageJsonLdContext.java:47)

at com.yesasia.yesstyle.web.wicket.panel.jsonld.JsonLd.createExtraJsonLdScheme(JsonLd.java:188)

at com.yesasia.yesstyle.web.wicket.panel.jsonld.JsonLd.createScript(JsonLd.java:76)

at com.yesasia.yesstyle.web.wicket.panel.jsonld.JsonLd.<init>(JsonLd.java:67)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.<init>(YsTemplatePage.java:275)

at com.yesasia.yesstyle.web.wicket.page.ProductPage.<init>(ProductPage.java:223)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)

2.render the review in product page

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.web.wicket.page.ProductPage$16.createReviews(ProductPage.java:1183)

at com.yesasia.yesstyle.web.wicket.page.ProductPage$16.createProductJsonLdScheme(ProductPage.java:1084) --> retrieve and get whole review

at com.yesasia.frontend.rest.web.wicket.panel.jsonld.context.ProductPageJsonLdContext.getExtraJsonLdScheme(ProductPageJsonLdContext.java:47)

at com.yesasia.yesstyle.web.wicket.panel.jsonld.JsonLd.createExtraJsonLdScheme(JsonLd.java:188)

at com.yesasia.yesstyle.web.wicket.panel.jsonld.JsonLd.createScript(JsonLd.java:76)

at com.yesasia.yesstyle.web.wicket.panel.jsonld.JsonLd.<init>(JsonLd.java:67)

at com.yesasia.yesstyle.web.wicket.page.YsTemplatePage.<init>(YsTemplatePage.java:275)

at com.yesasia.yesstyle.web.wicket.page.ProductPage.<init>(ProductPage.java:223)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)







## pdp smart text link

background:

revam the PDP smart text link using next.js framework



for springboot:

1. AssetsController add the resource key into the _STATIC_ASSET_KEYS

2. SHARED_100percentSatisfaction,YS_popup.100satisfaction.tab.customs.title,SHARED_shoppingNotes



for nextjs:

1.in the [pid].tsx (A TSX file is a TypeScript (. TS) file written using JSX synta)

2.add the resource key in the assetKeys array

3.using the assets in the smallTextLink area



old flow:

SHARED_100percentSatisfaction:

using the $templateCache to get a template html. in this case com/yesasia/yesstyle/web/wicket/panel/shoppingbagpage/secureshopping/satisfaction/SatisfactionContent.html

in this html you can see it use the resource key to do the i18n

SHARED_shoppingNotes:

1.using the $templateCache to get a template html too. but before get template, create the json object in the text/javascript

```
2.create the json object part is finished on java code, in this case is com.yesasia.yesstyle.web.wicket.panel.productpage.maincontent.MainContent#createInitProductScriptContainer
```
3.the logic like  StringBuilder script = new StringBuilder();

script.append("<script type=\"text/javascript\">"); there is many json object in it script.append("</script>");

4.the fullDetailProductJsonData.getShoppingNotes() can be retrieve the notes for thsi dialog





## pdp product detail section

the product information:

the other inforamtion:

the package information:

```
wicket:	com.yesasia.yesstyle.app.wicket.rest.service.resource.ProductRestResourceServiceImpl#getFullDetailProductJsonData
```
```
nextjs:	com.yesasia.frontend.cloudservice.service.controller.ProductControllerServiceImpl#getProductDetail
```


the brand rating:

the fav label:

the brand from logo:

get the producitem, using it contain attribute api to check the product in which parent (there will be women and beauty and men)

to solve getNavigationItem() can not be used in cloud service project

hard code the YS_KOREA_MEN,YS_KOREA_COSMETICS,YS_KOREA_WOMEN etc to resolve the getCmsFrontPageUrl does not in the cloud service project.



sql:

select * from ya_attribute_lang where lang_id =1 and attribute_id in (select attribute_id from ya_prod_attr where sku = 1115742148);



public static int MEN = 87080;

public static int BEAUTY = 88939;

public static int WOMEN = 87079;



## pdp product detail gallery,yesstyler,video

background:

1.click the photo thumnail will pop up the gallery dialog

1.1 there is two type of gallery, one is normal type and another one is fetched on the galleryDescription

2.click the video thumnail will pop up the video dialog

2.1 the video is youtube video, we need to convert it to the url that can embed in the iframe

2.2 below code show how to convert the youtube url to the embed url with start time.

private static String convertYoutubeUrls(Video video) {

if (video == null) {

return null;

}

if (video.getType() == VideoType.LICENSED_VIDEO

.getId()) {

return "https://www.youtube.com/embed/" + video.getYoutubeId();

}

String videoUrl = video.getVideoUrl();

String pattern = "https?://(?:youtu.be/|www.youtube.com/watch\\?v=)([\\w-]+)(?:&\\S*|\\?\\S*)?";

String replacement = "https://www.youtube.com/embed/$1";

Pattern regex = Pattern.compile(pattern);

Matcher matcher = regex.matcher(videoUrl);

String url = matcher.replaceAll(replacement);



int i = videoUrl.lastIndexOf("=");

String substring = videoUrl.substring(i + 1);

String startTime = substring.replaceAll("s", "");

String finalUrl = url.concat("?start=").concat(startTime);



return finalUrl;

}

3.click the yesstyler thumnail will pop up the yesstyler dialog

3.1 the gallery dialog and video dialog is the same, just the content is different

3.2 the yesstyler dialog is different, the button will be disabled if the product is not beauty product.

3.3 the yesstyler is the photo of user's review.





## nextjs PDP memberclub

background:

1.revam the PDP memberclub using next.js framework, below the product option, there are some member club information to show

2.there are a few of data we need to fill in:

FirstPurchaseMessage firstPurchaseMessage;

EliteClubCouponContainer eliteClubCouponContainer;

FreeItemMessageContainer freeItemMessageContainer;

FreeGiftOfSpecialOffersContainer freeGiftOfSpecialOffersContainer;

ExclusiveSaleMessageContainer exclusiveSaleMessageContainer;

BulkPurchaseMessage bulkPurchaseMessage;

LimitQuantityMessage limitQuantityMessage;

3.the eliteClubCouponContainer is the most complex one, it need to get the elite club coupon information from the backend, and then fill in the data





## flutter my account revamp

background:

1. for yesstyle app, there is no account page when user login,

2. if user need to check his/her account information, will redirect to the webview page.

3. the webview page is the old page, so we need to revamp to add the native account page in the app.



step:

1.copy the yesstyle-rest to cloud-service

2.decode the token. below stack trace show how to decode the token in old flow

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.app.wicket.rest.service.resource.YsAppRestResourceService.getApiToken(YsAppRestResourceService.java:1492)

at com.yesasia.yesstyle.app.wicket.rest.service.resource.YsAppRestResourceService.createAppRestContext(YsAppRestResourceService.java:275)

at com.yesasia.frontend.rest.resource.AbstractFrontendAppRestResource.handleMethodExecution(AbstractFrontendAppRestResource.java:318)

at com.yesasia.frontend.rest.resource.AbstractFrontendAppRestResource.respond(AbstractFrontendAppRestResource.java:274)

3.using RequestScopedData to store the request base object, base on this , we no need to pass the all parameters in same method.

@Component

@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)

public class RequestScopedData



task:

shipment -> move logic in web part to App API part, below is stacktrace for web

"qtp761197720-206@23958" prio=5 tid=0xce nid=NA runnable

java.lang.Thread.State: RUNNABLE

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.shipment.Shipment.createShipmentItemsContainer(Shipment.java:130)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.shipment.Shipment.<init>(Shipment.java:71)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.detailcontent.DetailContent.<init>(DetailContent.java:45)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.Detail.createOrdersContainer(Detail.java:55)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.detail.Detail.<init>(Detail.java:44)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.Order$1.handleViewOrderDetail(Order.java:78)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.Order$1.handleViewOrderDetail(Order.java:60)

at com.yesasia.frontend.util.constant.filteroption.OrderAction$Handler.handle(OrderAction.java:67)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.Order.createMainContent(Order.java:200)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.order.Order.<init>(Order.java:54)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.maincontent.member.Member.createMainContent(Member.java:89)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.maincontent.member.Member.<init>(Member.java:52)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.maincontent.MainContent.createMainContent(MainContent.java:55)

at com.yesasia.yesstyle.web.wicket.panel.accountpage.maincontent.MainContent.<init>(MainContent.java:47)

at com.yesasia.yesstyle.web.wicket.page.AccountPage.<init>(AccountPage.java:50)

at com.yesasia.yesstyle.web.wicket.page.accountpage.OrderPage.<init>(OrderPage.java:23)

at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)

at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)

at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)

at java.lang.reflect.Constructor.newInstance(Constructor.java:423)





sql:

credit:

selct:

select * from ya_frontend_credit_system_txn txn left join ya_frontend_credit_system fcn on txn.CREDIT_ID = fcn.CREDIT_ID where fcn.shopper_id = '2c9380827d36e1aa017d36e48ada0001';

add:

commission:

select:

select * from ya_rewards_credit_txn txn left join ya_rewards_credit yrc on  txn.credit_id = yrc.id where yrc.shopper_id = '2c9380827d36e1aa017d36e48ada0001'

update:

update ya_rewards_credit set shopper_id = '2c9380828a209588018a213da6d40000' where id = 3;

point:

select:

select * from ya_elite_club_point_txn txn left join ya_elite_club_point ecp on txn.credit_id = ecp.id where ecp.shopper_id = '2c9380827d36e1aa017d36e48ada0001';





## halloween banner

backgroup:

add the halloween banner in the homepage

https://bugzilla.yawin.yesasia.com/content_bugzilla/show_bug.cgi?id=112117



step:

1. for mobile we add the feature switch to determine when to show the banner

```
1.1 mainScreen#initFrontendContext the caller
```
1.2 and the value set screen/MainScreen.dart:1533 (FrontendContext.of(context)!.dynamicControlValues = frontendContextJsonData.dynamicControlValues!;)

1.3 using it | DynamicControlService.isEnableYsAppHalloween(frontendAppState)

2. the server

```
2.1 the receiver com.yesasia.yesstyle.app.wicket.rest.resource.AppShopperRestResource#initFrontendContext
```
```
2.2 the place to set com.yesasia.yesstyle.app.wicket.rest.domain.shopper.FrontendContextJsonData#addDynamicControlValue
```
3. after all of above step, the sever can control the app to show banner or not.



task:

we need to ask BA to add the asset to master file



comment in the bugzilla:

Hi Kelvin and Felix,



We found that the asset keys are required for mobile app client side during the asset sync today.



Could you please help to update master file with following frontend keys ?

YS_banner.halloween.2023.title

YS_banner.halloween.2023.tagline

YS_banner.halloween.2023.filter.costumes

YS_banner.halloween.2023.filter.makeup

YS_banner.halloween.2023.filter.decor



Thanks,







## add disk uage to CloudWatch in AWS

background:

as the disk usage does not be provided by AWS directly, so we need to implement it manually.

https://marbot.io/blog/monitoring-ec2-disk-usage.html



step:

1. create a lambda function to get the disk usage

2. create a cloudwatch event to trigger the lambda function

3. create a cloudwatch alarm to monitor the disk usage

4. create a cloudwatch dashboard to show the disk usage



detail:

Monitoring EC2 disk usage in an Auto Scaling Group (ASG) with CloudWatch metrics and alarms can be done by following these steps:



```
### Step 1: Enable Detailed Monitoring (Optional)
```
By default, EC2 instances send metrics to CloudWatch every 5 minutes. You can enable detailed monitoring to send metrics every minute.



1. Open the EC2 console.

2. Select the instance.

3. Choose the "Monitoring" tab.

4. Choose "Enable detailed monitoring."



```
### Step 2: Create a Custom Metric for Disk Usage
```
Disk usage is not a standard CloudWatch metric for EC2, so you'll need to create a custom metric.



1. Install the CloudWatch agent on your EC2 instances.

2. Configure the agent to collect disk usage metrics. You can use a configuration file like this:

```json

{

"metrics": {

"append_dimensions": {

"AutoScalingGroupName": "${aws:AutoScalingGroupName}"

},

"metrics_collected": {

"disk": {

"measurement": [

"used_percent"

],

"resources": [

"*"

]

}

}

}

}

```

3. Start the CloudWatch agent.



```
### Step 3: Create a CloudWatch Alarm
```
Now that you have the custom metric for disk usage, you can create an alarm.



1. Open the CloudWatch console.

2. In the navigation pane, choose "Alarms," then "Create alarm."

3. Choose "Select metric."

4. Under "Custom Namespaces," find and select your custom disk usage metric.

5. Configure the alarm settings:

- Set the threshold (e.g., 80% disk usage).

- Choose the "ASG" dimension to apply the alarm to the entire Auto Scaling Group.

- Set the evaluation period.

- Choose the action to take if the alarm state is triggered (e.g., send a notification, terminate an instance).

6. Choose "Create Alarm."



```
### Step 4: Test the Alarm (Optional)
```
You may want to test the alarm to ensure it's working as expected.



1. Simulate the condition that would trigger the alarm (e.g., fill the disk on an instance).

2. Verify that the alarm is triggered and the expected action is taken.



```
### Step 5: Maintain and Review
```
Regularly review the alarm configuration and the custom metric collection to ensure they continue to meet your needs.



- Update the CloudWatch agent as needed.

- Adjust alarm thresholds and actions as your requirements change.



By following these steps, you can monitor EC2 disk usage in an ASG with CloudWatch metrics and alarms, allowing you to respond to potential issues before they impact your application.









## black friday

background:
	will launch the black friday campaign in 2023,
	can refer to the commit 56f10c90;

step:


	related class:
			com.yesasia.frontend.service.browse.CloudBrowseServiceImpl#getBrowseResult
			com.yesasia.frontend.frontendcloudrest.controller.ProductsController
			com.yesasia.elasticsearch.cloud.searcher.query.OtherCriteriaFilterBuilderFactory
			com.yesasia.elasticsearch.cloud.searcher.aggregation.OtherCriteriaFilterAggregatorBuilderFactory
	query:
		curl -X GET "172.17.1.6:9201/ys_product_2/_doc/1124594841?pretty"
	
	indexer	
		ElasticsearchIndexProductTest_dev
	
	searcher	
		ElasticsearchSearchProduct_dev
	
	jewelfish:
		add one more attribute
	
	frontendcloudrest:
		1. the frontend cloud rest is a Bridge receive the request from springboot and send the request to elasticsearch.
		2. change the file to point to local frontend cloud rest API. (frontend/frontend-core/src/main/resources/frontendContext-service.properties)
		3. also need the elasticsearch-cloud/elasticsearch-cloud-searcher modules, because we have changed the elasticsearch-cloud-searcher and frontendcloudrest is depend on it.
		4. deploy local frontend cloud rest API.
		5. change the ys local to use the frontend cloud rest API.
		6. UAT deployment pipeline  UAT_Product_Search_API_yscloudrest


step:
	1. write down the json data in html name is ysApp.browse.result
	2. angular will retrieve the data from this json data and for loop it to show the other_criteria
	3. the other_criteria is the filter option, it will be show in the filter area
	4. the search engine(elasticsearch) will return the a map, if the option here, will display it in the filter area
	5. so we need to update the search engine to include the black friday option

flow:	
	1. stacktrace for store front page
	
	```
		determine if display other_criteria or not
		java.lang.Thread.State: RUNNABLE
			at com.yesasia.frontend.domain.BrowseResult.getOptionHitCount(BrowseResult.java:454)
			at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.createFilterJsonData(YsRestResourceServiceImpl.java:3512)
			at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.createProductsJsonData(YsRestResourceServiceImpl.java:3285)
			at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.getProductsJsonData(YsRestResourceServiceImpl.java:604)
			at sun.reflect.GeneratedMethodAccessor908.invoke(Unknown Source:-1)
			at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
			at java.lang.reflect.Method.invoke(Method.java:498)
			at org.apache.wicket.proxy.LazyInitProxyFactory$JdkHandler.invoke(LazyInitProxyFactory.java:484)
			at com.sun.proxy.$Proxy248.getProductsJsonData(Unknown Source:-1)
			at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.getBrowseResultJsonDataObject(MainContent.java:140)
			at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.createInitScriptContainer(MainContent.java:81)
			at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.<init>(MainContent.java:35)
			at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.createMainContent(BrowsingPage.java:1472)
			at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.<init>(BrowsingPage.java:216)
			at sun.reflect.GeneratedConstructorAccessor243.newInstance(Unknown Source:-1)
			at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
			at java.lang.reflect.Constructor.newInstance(Constructor.java:423)
	```


​	
​	2. stack trace for invoking the frontendcloudrest API
​		
​		```
​		"http-nio-8080-exec-1@11399" daemon prio=5 tid=0x24 nid=NA runnable
​		java.lang.Thread.State: RUNNABLE
​			at com.yesasia.elasticsearch.cloud.searcher.query.OtherCriteriaFilterBuilderFactory.createFilterBuilder(OtherCriteriaFilterBuilderFactory.java:366)
​			at com.yesasia.elasticsearch.cloud.searcher.query.ProductFiltersBuildFactory.createFilterBuilder(ProductFiltersBuildFactory.java:793)
​			at com.yesasia.elasticsearch.cloud.searcher.aggregation.BrandFilterAggregatorBuilderFactory.getFiltersAggregatorKeyedFilters(BrandFilterAggregatorBuilderFactory.java:54)
​			at com.yesasia.elasticsearch.cloud.searcher.aggregation.ProductFilterAggregatorsBuilderFactory.getFilterNAggregatorsMapping(ProductFilterAggregatorsBuilderFactory.java:756)
​			at com.yesasia.elasticsearch.cloud.searcher.service.SearchServiceImpl.prepareAggregation(SearchServiceImpl.java:1703)
​			at com.yesasia.elasticsearch.cloud.searcher.service.SearchServiceImpl.doProductSearch(SearchServiceImpl.java:1339)
​			at com.yesasia.elasticsearch.cloud.searcher.service.SearchServiceImpl.search(SearchServiceImpl.java:431)
​			at com.yesasia.frontend.frontendcloudrest.controller.AbstractProductsController.doGetProducts(AbstractProductsController.java:52)
​			at com.yesasia.frontend.frontendcloudrest.controller.ProductsController.getProducts(ProductsController.java:29)
​			at sun.reflect.GeneratedMethodAccessor89.invoke(Unknown Source:-1)
​			at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
​			at java.lang.reflect.Method.invoke(Method.java:498)
​		```


​		
​		
​	3. stack trace for invoking the elasticsearch
​		  
​		```
​		java.lang.Thread.State: RUNNABLE
​			at com.yesasia.elasticsearch.cloud.searcher.service.SearchServiceImpl.doProductSearch(SearchServiceImpl.java:1375)
​			at com.yesasia.elasticsearch.cloud.searcher.service.SearchServiceImpl.search(SearchServiceImpl.java:431)
​			at com.yesasia.frontend.frontendcloudrest.controller.AbstractProductsController.doGetProducts(AbstractProductsController.java:52)
​			at com.yesasia.frontend.frontendcloudrest.controller.ProductsController.getProducts(ProductsController.java:29)
​			at sun.reflect.GeneratedMethodAccessor89.invoke(Unknown Source:-1)
​			at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
​			at java.lang.reflect.Method.invoke(Method.java:498)
​		```


​		
​		
​	4. stack trace for process json data for filter:
​		
​		```
​		java.lang.Thread.State: RUNNABLE
​			at com.yesasia.frontend.rest.web.wicket.domain.RefineByFilterConfig.<init>(RefineByFilterConfig.java:87)
​			at com.yesasia.yesstyle.web.wicket.support.browsing.AbstractProductSupport.getRefineByFilterConfig(AbstractProductSupport.java:1049)
​			at com.yesasia.yesstyle.web.wicket.support.browsing.AbstractProductSupport.getDepartmentRefineByFilterConfigs(AbstractProductSupport.java:247)
​			at com.yesasia.yesstyle.web.wicket.support.browsing.DepartmentSupport.getRefineByFilterConfigs(DepartmentSupport.java:417)
​			at com.yesasia.yesstyle.web.wicket.support.browsing.AbstractProductSupport.getExtraHitCountOptions(AbstractProductSupport.java:261)
​			at com.yesasia.yesstyle.web.wicket.support.browsing.DepartmentSupport.decorateFilters(DepartmentSupport.java:394)
​			at com.yesasia.yesstyle.web.wicket.support.browsing.PageTargetSupport.decorateFilters(PageTargetSupport.java:72)
​			at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.getProductsJsonData(YsRestResourceServiceImpl.java:601)
​			at sun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethodAccessorImpl.java:-1)
​			at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
​			at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
​			at java.lang.reflect.Method.invoke(Method.java:498)
​			at org.apache.wicket.proxy.LazyInitProxyFactory$JdkHandler.invoke(LazyInitProxyFactory.java:484)
​			at com.sun.proxy.$Proxy278.getProductsJsonData(Unknown Source:-1)
​			at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.getBrowseResultJsonDataObject(MainContent.java:140)
​			at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.createInitScriptContainer(MainContent.java:81)
​			at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.<init>(MainContent.java:35)
​			at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.createMainContent(BrowsingPage.java:1472)
​			at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.<init>(BrowsingPage.java:216)
​			at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)
​			at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
​			at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
​			at java.lang.reflect.Constructor.newInstance(Constructor.java:423)
​			
​			java.lang.Thread.State: RUNNABLE
​					at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.createFilterJsonData(YsRestResourceServiceImpl.java:3515)
​					at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.createProductsJsonData(YsRestResourceServiceImpl.java:3285)
​					at com.yesasia.yesstyle.web.wicket.rest.service.resource.YsRestResourceServiceImpl.getProductsJsonData(YsRestResourceServiceImpl.java:604)
​					at sun.reflect.NativeMethodAccessorImpl.invoke0(NativeMethodAccessorImpl.java:-1)
​					at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)
​					at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)
​					at java.lang.reflect.Method.invoke(Method.java:498)
​					at org.apache.wicket.proxy.LazyInitProxyFactory$JdkHandler.invoke(LazyInitProxyFactory.java:484)
​					at com.sun.proxy.$Proxy278.getProductsJsonData(Unknown Source:-1)
​					at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.getBrowseResultJsonDataObject(MainContent.java:140)
​					at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.createInitScriptContainer(MainContent.java:81)
​					at com.yesasia.yesstyle.web.wicket.panel.browsingpage.maincontent.MainContent.<init>(MainContent.java:35)
​					at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.createMainContent(BrowsingPage.java:1472)
​					at com.yesasia.yesstyle.web.wicket.page.BrowsingPage.<init>(BrowsingPage.java:216)
​					at sun.reflect.NativeConstructorAccessorImpl.newInstance0(NativeConstructorAccessorImpl.java:-1)
​					at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)
​					at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)
​					at java.lang.reflect.Constructor.newInstance(Constructor.java:423)
​		```



5. summary the flow:
	5.1 web app will call the frontendcloudrest API to retrieve all available other_criteria
	5.2 process the json data in createFilterJsonData
	5.3 angularJS will use this one to rendering the filter in left panel.



## code Coverage enhancement

?:

OAuthDaoImpl



logic problem:

BackendEmailJobDaoImpl.searchBackendEmailJobs()

ImageGalleryDaoImpl.createGalleryImageTagsByRowData()



can not enter catch block:

AppNotificationDaoImpl.getAppExclusiveCouponTargetAppNotificationSubscriptionIds()



being comment:

ReviewDaoTest.testGetCustomerReviewForLangDetection

RmaDaoTest.testIsCustomerPuritoRefundSubmitted()

ProductDaoImpl.loadAdultDeptCount()

CheckoutDaoImpl.addOrderComment()



no table:

RmaDaoTest.isRefundRequested()



no stored procedure or function in dev:

myaccountdao.debitEliteClubPoint()

HelpDaoTest.testCreateCrmEnquiry()









# Tech Stack



## Keymap

intellij map to Elicpse:

name  							intellij         				eclipse

find in path					ctrl+shift+f					ctrl+h

navigate to class				ctrl+n							ctrl+shift+T

file stucture					ctrl+f12						ctrl+o

implementation					ctrl+alt+B or click				ctrl+t

call hierarchy					ctrl+alt+h						ctrl+alt+h

method hierarchy				ctrl+shift+h					ctrl+shift+h

finding file					ctrl+shift+n					ctrl+shift+r

optimize import					ctrl+alt+o						ctrl+shift+o

Back   							ctrl+alt+left 					alt+left

forward							ctrl+alt+right					alt+right

pervious method					alt+up							ctrl+shift+up

next method						alt+down						ctrl+shift+down

autoname complement				ctrl+alt+space					alt+/

extract the name from result	ctrl+alt+v						alt+shift+l

comment line					ctrl+shift+/					ctrl+shift+/

comment block					ctrl+/							ctrl+/

Type hierarchy					ctrl+h							F4

go to line						ctrl+g							ctrl+l

find in file					ctrl+f							ctrl+f

delete line						ctrl+y							ctrl+l

last edit place					ctrl+shift+backspace			ctrl+q

recent file						ctrl+e							ctrl+e

reformat code					ctrl+alt+l						ctrl+shift+f

rename							shift+f6						alt+shift+r

gen setter getter				alt+insert						alt+shift+s

toggle case						ctrl+shift+u					ctrl+shift+y

move caret to matching brace	ctrl+shift+m					ctrl+shift+p

hide the cover					Ctrl+Alt+F6



visual code:

name							key

show the command palette		CTRL+SHIFT+P

navigate to class(Quick Open)	CTRL+P

Toggle Sidebar 					CTRL+B

Multi-Select Cursor				CTRL+D

Copy Line						SHIFT+ALT+UP or SHIFT+ALT+DOWN

Comment Code Block				SHIFT+ALT+A

Go back / move forward			ALT+ —> or + –>

Show All Symbols				CTRL+T

Trigger suggestion				Ctrl+Space, Ctrl+Shift+Space

Goto definition					F12

Show References					Shift+F12

Goto implementation				CTRL+F12

Global Find						CTRL+SHIFT+F

current line in the cursor		CTRL+L

Reload window					CTRL+R

Toggle the terminal window		CTRL+`

new terminal instance			CTRL+SHIFT+`

Go to user settings				CTRL+,

Go to keyboard shortcuts	    Ctrl+K CTRL+S

go to a line in the file		CTRL + G

Method List in a file 			CTRL+Shift+O

New window						Ctrl+Shift+N

Close window					Ctrl+Shift+W

Copy line up/down				Shift+Alt + ↓ / ↑

Move line up/down				Alt+ ↑ / ↓

Jump to matching bracket		Ctrl+Shift+\

Indent/outdent line				Ctrl+] / [

Toggle word wrap				Alt+Z

search symbol					Cmd+P

```
# - Find symbol across files
```
@ - Find symbol within file

@: - Group symbols within a file

duplicate a line				Shift+Alt+Down and Shift+Alt+Up

multiple line tab				CTRL + P search and open the settings.json

"workbench.editor.wrapTabs": true



refactor name 					f2

go to specified line 			CTRL+g

format code						Shift + Alt + F

format selected code			Ctrl+K Ctrl+F







## plugin

Android Studio:

CodeGlance3 -> right scroll bar like visual code.

Dart -> the language syntax supportter.

Flutter -> the flutter framework supportter.



Beyond-Compare4 rest:

reg delete "HKCU\Software\Scooter Software\Beyond Compare 4" /v CacheID /f





## repository

the project is using SVN for the codebase.

there is no full track in the IntelliJ when I search some commit

so we need to use the TortoiseSVN to search the class will find the corresponding commit. like AppleAppSiteAssociationFilter, but search in intellij is not found.







## setting for intellij2022

1.set the usages display

File | Settings | Editor | Inlay Hints, you can find the code version section, tick you want.

2.set three level of tab

File | Settings | Editor | General | Editor Tabs, Disable the Show tabs in one row

3.Highlight level in

tick mark in the right top corner in the every .java file. dropdown the Highlight:, you can select it with syntax Highlight level.

4.open new project always ask to use current windows or new windows

File | Settings | Appearance & Behavoir | System setting | Prject section.

5.breakpoint path:

D:\vincent\dev\frontend\workspace.intellij\parent\.idea\workspace.xml

<component name="XDebuggerManager">

6.Dependencies

6.1 analyze dependencies -> Code | Analyze Code | Module Dependencies.

6.2 group module -> in maven project viewer | click the setting icon | tick the group module

6.3 OR Open the "Maven" tool window. You can do this by going to "View" -> "Tool Windows" -> "Maven".

6.4 In the "Maven" tool window, expand the "Dependencies" node of your project.

6.5 OR using [mvn dependency:tree] to get inforamtion

7.project setting

File | Porject Structure | Project setting: select SDK (JAVA develop kit)

File | Porject Structure | Modules : add the module

8.project configuration file.

8.1 the workspace(father pom) setting placed on the folder (.idea).

8.2 under this folder you can find the breakpoint modules and other relative to workspace.

8.3 and each project will have *.iml file in its module folder representing project setting.

8.4 as we add the project using maven tool, so other project does not have the .idea folder.

9.if the VCS(version control) stuck the intellij

9.1 File | Invalidate Caches | check the Clear VCS Log caches and indexs

9.2 invalidate and restart, the VCS log will be clear.

10.disbale auto refresh for VCS

10.1 in the Subversion bottom navigation bar and select repositories tab,

10.2 Click the Clear button.

10.3 Click the refresh button, you will see the setting for auto refresh.

11.if there are new module or project can not recognize as java source code.

11.1 Right click on the pom.xml in the module/project | Add as Maven project

11.2 Reimport/Reload in the Maven tab view.

12.Surround With try catch

12.1 Choose Code > Surround With

12.2 or alt+shift+z

13.android studio start directory for terminal not working

switch to use the cmd not PowerShell.

14.Ignore case for code completion

Settings | Editor | General | Code completion | Match Case

14.Cannot resolve symbol

14.1 check the project structure to is there any dependencies can not be imported.

14.2 File | Invalidate Caches , clear up all cache.

14.3 reimport the module.

15.mark a project/folder as a maven project

15.1 Find the pom.xml in the directory for current project.

15.2 Right click the pom.xml.

15.3 Then you can see the popup windows. Select the last item "add as maven project file".

15.4 Then, the maven build tool can automatically discern the directory as an module and import the specified jar dependencies.

16.svn to git

16.1 File | Setting | Version Control | Directory Mappings

16.2 change <porject> to Git under VCS column





## setting for visual code

Using GIT:

1. download the gitlens plugin.

2. you can use it to view the git log graphic

2.1 just go to source control tab in left pannel.

2.2 extand the gitlens:branches dropdown list

2.3 right click the branch and select the [open in commit graphics]

3. annotation blame.

3.1 File Blame shows the commit and author who last modified each line of a file.

3.2 File Heatmap shows how recently lines were changed relative to all the other changes in the file.

3.3 Files Changes highlights any local, unpublished changes, or lines changed by the most recent commit.

3.4 use it find the right top conner, click the file annotation icon.









## Tech Stack---

should have:

DevOps view:

DEV:

LANG:

```
JAVA\Kotlin\Javascript\GoLang\C#\Python\PHP\Dart\SQL
```
Framework:

Spring,

SpringMVC,

SpringCloud,

Hibernate, Mybatis

Angular, React.js, Vue.js

Flutter

MiddleWare:

Solr, Elasticsearch, ActiveMQ, RabbitMQ, Kafka

DataBase:

RDBMS : MySQL, Oracle, SQL Server, SQLlite, PostgreSQL

NoSQL : Redis, MongoDB

BuildTools:

Ant\Maven\Gradle

Version Control:

GIT

Server:

Tomcat, Jettry, Netty

OPS:

Docker\Kubernete\Jenkins\Arthas

PM Tool:

Jira



tool:

hfs.exe can host the webpage as a webserver





company:

Yesstyle:

Dev:

Server Side:

Monolith structure -> so server side include web developing.

Backend:

Java:

wicket (should use SpringMVC) : Presetation Layer

spring	: Bussiness Logic Layer

hibernate : Data Access Layer

Frontend:

Javascript

Angular.js 1.0

Client Side:

Android Studio:

Flutter(GUI SDK):

Dart

So we need three SDK, Android API platform, Flutter SDK and Dart SDK

version control:

SVN

OPS:

Jenkins

AI:

dynamicyield

Tracking(Big data):

GA4, Mapp

PM Tool:

Bugzilla & wrike



Watson Group:

DEV:

Framework:

Spring:

SpringMVC:

SAP hybris:

SpringBoot:

MiddleWare:

Solr, BrigdeWell

DataBase:

Oracle

BuildTools:

Ant

Version Control:

GIT

OPS:

Docker\Jenkins\Ansible

PM Tool:

Jira