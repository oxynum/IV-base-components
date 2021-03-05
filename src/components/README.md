# Components Organization

Here is a few points on how components are handle inside the platform. First you need to know that all the design is hosted on Figma:

-> [Link](https://www.figma.com/file/XYwpvtDaTc3Dl5E1t4YetZ/V1-Imvitro?node-id=95%3A2)

This folder respects the Design Pattern of Atomic Design, you can see the documentation [here](https://atomicdesign.bradfrost.com/chapter-2/)

## Atoms

Atoms are supposed to resume small components. They will all registered inside the **global VueJs Instace**

## Molecules

Molecules are supposed to put some logic between Atoms components. They do not have any iteraction with the **store**.

## Organisms

Organisms are supposed to interact with molecules AND atoms. They can interact with the **store**.
