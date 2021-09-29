![alt text](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

<ul>
    <li>
      application
      <ul>
        <li style='background-color: #FBFEB0; color: black'>domain (Enterprise Business Rules)</li>
        <li style='background-color: #FF9A99; color: black'>useCases (Application Business Rules)</li>
        <li>testing (Test Utilities)</li>
      </ul>
    </li>
    <li style='background-color: #9BD8FF; color: black'>infrastructure (Frameworks & Drivers)</li>
    <li style='background-color: #9BD8FF; color: black'>web</li>
    <li>core (Utilities)</li>
</ul>

> No Interface Adapters layer - it's merged with outer layer (infrastructure and web).

# Web (EntryPoint)

- views - *High Level Components (smart)*
- ui - *Low Level UI Components (stupid)*
- env - *Environment Utilities*
- core - *Web Specific Utilities*

# UseCases

- [CleanUseCase](https://github.com/IgorBabkin/ts-ioc-container/tree/master/packages/clean-use-case)

# Reactivity

- [rxjs](https://rxjs.dev/)
- [reactivex-store](https://github.com/IgorBabkin/ts-ioc-container/tree/master/packages/reactivex-store)
