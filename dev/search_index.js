var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ReferenceFiniteElements","category":"page"},{"location":"#ReferenceFiniteElements","page":"Home","title":"ReferenceFiniteElements","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ReferenceFiniteElements.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ReferenceFiniteElements]","category":"page"},{"location":"#ReferenceFiniteElements.AbstractHex","page":"Home","title":"ReferenceFiniteElements.AbstractHex","text":"\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.AbstractQuad","page":"Home","title":"ReferenceFiniteElements.AbstractQuad","text":"\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.AbstractTet","page":"Home","title":"ReferenceFiniteElements.AbstractTet","text":"\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.AbstractTri","page":"Home","title":"ReferenceFiniteElements.AbstractTri","text":"\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.Hex8","page":"Home","title":"ReferenceFiniteElements.Hex8","text":"degree::Int64\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.Interpolants","page":"Home","title":"ReferenceFiniteElements.Interpolants","text":"ξ::AbstractVector\nw::Any\nN::AbstractVector\n∇N_ξ::AbstractMatrix\n∇∇N_ξ::AbstractArray{Ftype, 3} where Ftype\n\nInterpolant container for a single quadrature point\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.Quad4","page":"Home","title":"ReferenceFiniteElements.Quad4","text":"degree::Int64\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.Quad9","page":"Home","title":"ReferenceFiniteElements.Quad9","text":"degree::Int64\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.ReferenceFE-Union{Tuple{ReferenceFiniteElements.ReferenceFEType{N, D, Q}}, Tuple{Q}, Tuple{D}, Tuple{N}} where {N, D, Q}","page":"Home","title":"ReferenceFiniteElements.ReferenceFE","text":"Constructor for ReferenceFE\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.ReferenceFEType","page":"Home","title":"ReferenceFiniteElements.ReferenceFEType","text":"Type to define new element shapes\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.SimplexTri","page":"Home","title":"ReferenceFiniteElements.SimplexTri","text":"n_nodes::Int64\ndegree::Int64\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.Tet10","page":"Home","title":"ReferenceFiniteElements.Tet10","text":"degree::Int64\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.Tet4","page":"Home","title":"ReferenceFiniteElements.Tet4","text":"degree::Int64\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.Tri3","page":"Home","title":"ReferenceFiniteElements.Tri3","text":"degree::Int64\n\n\n\n\n\n","category":"type"},{"location":"#ReferenceFiniteElements.Tri6","page":"Home","title":"ReferenceFiniteElements.Tri6","text":"degree::Int64\n\n\n\n\n\n","category":"type"},{"location":"#Base.show-Tuple{IO, ReferenceFE}","page":"Home","title":"Base.show","text":"show(io::IO, e::ReferenceFE)\n\n\nshow(io, e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:53.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.degree-Tuple{ReferenceFiniteElements.ReferenceFEType}","page":"Home","title":"ReferenceFiniteElements.degree","text":"degree(e::ReferenceFiniteElements.ReferenceFEType) -> Any\n\n\nReturns the quadrature degree of a ReferenceFEType\n\ndegree(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFETypes.jl:10.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_stencil-Union{Tuple{Ftype}, Tuple{Itype}, Tuple{Hex8, Type{Itype}, Type{Ftype}}} where {Itype<:Integer, Ftype<:AbstractFloat}","page":"Home","title":"ReferenceFiniteElements.element_stencil","text":"element_stencil(\n    _::Hex8,\n    _::Type{Itype<:Integer},\n    _::Type{Ftype<:AbstractFloat}\n) -> Tuple{Matrix, Matrix, Vector}\n\n\nelement_stencil(_, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Hex8.jl:3.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_stencil-Union{Tuple{Ftype}, Tuple{Itype}, Tuple{Quad4, Type{Itype}, Type{Ftype}}} where {Itype<:Integer, Ftype<:AbstractFloat}","page":"Home","title":"ReferenceFiniteElements.element_stencil","text":"element_stencil(\n    _::Quad4,\n    _::Type{Itype<:Integer},\n    _::Type{Ftype<:AbstractFloat}\n) -> Tuple{Matrix, Matrix, Vector}\n\n\nelement_stencil(_, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Quad4.jl:3.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_stencil-Union{Tuple{Ftype}, Tuple{Itype}, Tuple{Quad9, Type{Itype}, Type{Ftype}}} where {Itype<:Integer, Ftype<:AbstractFloat}","page":"Home","title":"ReferenceFiniteElements.element_stencil","text":"element_stencil(\n    _::Quad9,\n    _::Type{Itype<:Integer},\n    _::Type{Ftype<:AbstractFloat}\n) -> Tuple{Matrix, Matrix, Vector}\n\n\nelement_stencil(_, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Quad9.jl:3.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_stencil-Union{Tuple{Ftype}, Tuple{Itype}, Tuple{SimplexTri, Type{Itype}, Type{Ftype}}} where {Itype<:Integer, Ftype<:AbstractFloat}","page":"Home","title":"ReferenceFiniteElements.element_stencil","text":"element_stencil(\n    e::SimplexTri,\n    _::Type{Itype<:Integer},\n    _::Type{Ftype<:AbstractFloat}\n) -> Tuple{Matrix{Float64}, Matrix{Int64}, Vector{Int64}}\n\n\nelement_stencil(e, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/SimplexTri.jl:3.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_stencil-Union{Tuple{Ftype}, Tuple{Itype}, Tuple{Tet10, Type{Itype}, Type{Ftype}}} where {Itype<:Integer, Ftype<:AbstractFloat}","page":"Home","title":"ReferenceFiniteElements.element_stencil","text":"element_stencil(\n    _::Tet10,\n    _::Type{Itype<:Integer},\n    _::Type{Ftype<:AbstractFloat}\n) -> Tuple{Matrix, Matrix, Vector}\n\n\nelement_stencil(_, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tet10.jl:3.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_stencil-Union{Tuple{Ftype}, Tuple{Itype}, Tuple{Tet4, Type{Itype}, Type{Ftype}}} where {Itype<:Integer, Ftype<:AbstractFloat}","page":"Home","title":"ReferenceFiniteElements.element_stencil","text":"element_stencil(\n    _::Tet4,\n    _::Type{Itype<:Integer},\n    _::Type{Ftype<:AbstractFloat}\n) -> Tuple{Matrix, Matrix, Vector}\n\n\nelement_stencil(_, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tet4.jl:3.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_stencil-Union{Tuple{Ftype}, Tuple{Itype}, Tuple{Tri3, Type{Itype}, Type{Ftype}}} where {Itype<:Integer, Ftype<:AbstractFloat}","page":"Home","title":"ReferenceFiniteElements.element_stencil","text":"element_stencil(\n    _::Tri3,\n    _::Type{Itype<:Integer},\n    _::Type{Ftype<:AbstractFloat}\n) -> Tuple{Matrix, Matrix, Vector}\n\n\nelement_stencil(_, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tri3.jl:3.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_stencil-Union{Tuple{Ftype}, Tuple{Itype}, Tuple{Tri6, Type{Itype}, Type{Ftype}}} where {Itype<:Integer, Ftype<:AbstractFloat}","page":"Home","title":"ReferenceFiniteElements.element_stencil","text":"element_stencil(\n    _::Tri6,\n    _::Type{Itype<:Integer},\n    _::Type{Ftype<:AbstractFloat}\n) -> Tuple{Matrix, Matrix, Vector}\n\n\nelement_stencil(_, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tri6.jl:3.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.element_type-Union{Tuple{ReferenceFE{Itype, N, D, Ftype, L1, L2, Q, RefFE, S, VOM, M, V}}, Tuple{V}, Tuple{M}, Tuple{VOM}, Tuple{S}, Tuple{RefFE}, Tuple{Q}, Tuple{L2}, Tuple{L1}, Tuple{Ftype}, Tuple{D}, Tuple{N}, Tuple{Itype}} where {Itype, N, D, Ftype, L1, L2, Q, RefFE<:ReferenceFiniteElements.ReferenceFEType, S, VOM, M, V}","page":"Home","title":"ReferenceFiniteElements.element_type","text":"element_type(\n    _::ReferenceFE{Itype, N, D, Ftype, L1, L2, Q, RefFE<:ReferenceFiniteElements.ReferenceFEType, S, VOM, M, V}\n) -> Type{RefFE} where RefFE<:ReferenceFiniteElements.ReferenceFEType\n\n\nReturns the nodes of vertices TODO this is probably not very useful\n\nelement_type(_)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:141.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.num_dimensions-Tuple{ReferenceFE}","page":"Home","title":"ReferenceFiniteElements.num_dimensions","text":"num_dimensions(e::ReferenceFE) -> Any\n\n\nReturns number of dimensions\n\nnum_dimensions(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:158.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.num_dimensions-Union{Tuple{ReferenceFiniteElements.ReferenceFEType{N, D, Q}}, Tuple{Q}, Tuple{D}, Tuple{N}} where {N, D, Q}","page":"Home","title":"ReferenceFiniteElements.num_dimensions","text":"num_dimensions(\n    _::ReferenceFiniteElements.ReferenceFEType{N, D, Q}\n) -> Any\n\n\nReturns the number of dimensions for a ReferenceFEType\n\nnum_dimensions(_)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFETypes.jl:20.\n\nnum_dimensions(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:158.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.num_nodes-Union{Tuple{ReferenceFiniteElements.ReferenceFEType{N, D, Q}}, Tuple{Q}, Tuple{D}, Tuple{N}} where {N, D, Q}","page":"Home","title":"ReferenceFiniteElements.num_nodes","text":"num_nodes(\n    _::ReferenceFiniteElements.ReferenceFEType{N, D, Q}\n) -> Any\n\n\nReturns the number of nodes for a ReferenceFEType\n\nnum_nodes(_)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFETypes.jl:15.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.num_nodes_per_element-Tuple{ReferenceFE}","page":"Home","title":"ReferenceFiniteElements.num_nodes_per_element","text":"num_nodes_per_element(e::ReferenceFE) -> Any\n\n\nReturns number of nodes per element\n\nnum_nodes_per_element(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:163.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.num_q_points-Tuple{ReferenceFE}","page":"Home","title":"ReferenceFiniteElements.num_q_points","text":"num_q_points(e::ReferenceFE) -> Any\n\n\nReturns number of quadrature points\n\nnum_q_points(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:168.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.num_q_points-Union{Tuple{ReferenceFiniteElements.ReferenceFEType{N, D, Q}}, Tuple{Q}, Tuple{D}, Tuple{N}} where {N, D, Q}","page":"Home","title":"ReferenceFiniteElements.num_q_points","text":"num_q_points(\n    _::ReferenceFiniteElements.ReferenceFEType{N, D, Q}\n) -> Any\n\n\nReturns the number of quadrature porints for a ReferenceFEType\n\nnum_q_points(_)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFETypes.jl:25.\n\nnum_q_points(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:168.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.quadrature_point-Tuple{ReferenceFE, Int64}","page":"Home","title":"ReferenceFiniteElements.quadrature_point","text":"quadrature_point(e::ReferenceFE, q::Int64) -> Any\n\n\nReturns a specific quadrature point indexed by q\n\nquadrature_point(e, q)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:93.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.quadrature_points-Tuple{ReferenceFE}","page":"Home","title":"ReferenceFiniteElements.quadrature_points","text":"quadrature_points(e::ReferenceFE) -> Any\n\n\nReturns all quadrature points\n\nquadrature_points(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:88.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.quadrature_points_and_weights-Union{Tuple{E}, Tuple{T}, Tuple{A}, Tuple{E, Type{A}, Type{T}}} where {A<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}, T<:Number, E<:ReferenceFiniteElements.AbstractHex}","page":"Home","title":"ReferenceFiniteElements.quadrature_points_and_weights","text":"quadrature_points_and_weights(\n    e::ReferenceFiniteElements.AbstractHex,\n    _::Type{A<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}},\n    _::Type{T<:Number}\n) -> Tuple{Any, Any}\n\n\nquadrature_points_and_weights(e, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/HexCommon.jl:18.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.quadrature_points_and_weights-Union{Tuple{T}, Tuple{A}, Tuple{E}, Tuple{E, Type{A}, Type{T}}} where {E<:ReferenceFiniteElements.AbstractQuad, A<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}, T<:Number}","page":"Home","title":"ReferenceFiniteElements.quadrature_points_and_weights","text":"quadrature_points_and_weights(\n    e::ReferenceFiniteElements.AbstractQuad,\n    _::Type{A<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}},\n    _::Type{T<:Number}\n) -> Tuple{Any, Any}\n\n\nquadrature_points_and_weights(e, _, _)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/QuadCommon.jl:41.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.quadrature_weight-Tuple{ReferenceFE, Int64}","page":"Home","title":"ReferenceFiniteElements.quadrature_weight","text":"quadrature_weight(e::ReferenceFE, q::Int64) -> Any\n\n\nReturns a specific quadrature weight indexed by q\n\nquadrature_weight(e, q)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:103.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.quadrature_weights-Tuple{ReferenceFE}","page":"Home","title":"ReferenceFiniteElements.quadrature_weights","text":"quadrature_weights(e::ReferenceFE) -> Any\n\n\nReturns all quadrature weights\n\nquadrature_weights(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:98.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.setup_interpolants_simplex_tri!-NTuple{6, Any}","page":"Home","title":"ReferenceFiniteElements.setup_interpolants_simplex_tri!","text":"setup_interpolants_simplex_tri!(\n    Ns,\n    ∇N_ξs,\n    ∇∇N_ξs,\n    e,\n    ξs,\n    coordinates\n)\n\n\nsetup_interpolants_simplex_tri!(\n    Ns,\n    ∇N_ξs,\n    ∇∇N_ξs,\n    e,\n    ξs,\n    coordinates\n)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/SimplexTri.jl:46.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.setup_quad_quadrature_weights!-Tuple{Any, Any}","page":"Home","title":"ReferenceFiniteElements.setup_quad_quadrature_weights!","text":"setup_quad_quadrature_weights!(w_return, ws)\n\n\nsetup_quad_quadrature_weights!(w_return, ws)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/QuadCommon.jl:27.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Tuple{ReferenceFE, Int64}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(e::ReferenceFE, i::Int64) -> Any\n\n\nReturns a specific quadrature point's shape function gradient indexed by q\n\nshape_function_gradients(e, i)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:123.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Tuple{ReferenceFE}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(e::ReferenceFE) -> Any\n\n\nReturns all shape function gradients\n\nshape_function_gradients(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:118.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Union{Tuple{A2}, Tuple{A1}, Tuple{Hex8, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(\n    e::Hex8,\n    _::Type{A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_gradients(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Hex8.jl:103.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Union{Tuple{A2}, Tuple{A1}, Tuple{Quad4, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(\n    e::Quad4,\n    _::Type{A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_gradients(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Quad4.jl:31.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Union{Tuple{A2}, Tuple{A1}, Tuple{Quad9, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(\n    e::Quad9,\n    _::Type{A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_gradients(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Quad9.jl:54.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Union{Tuple{A2}, Tuple{A1}, Tuple{Tet10, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(\n    e::Tet10,\n    _::Type{A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_gradients(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tet10.jl:105.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Union{Tuple{A2}, Tuple{A1}, Tuple{Tet4, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(\n    e::Tet4,\n    _::Type{A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_gradients(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tet4.jl:69.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Union{Tuple{A2}, Tuple{A1}, Tuple{Tri3, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(\n    e::Tri3,\n    _::Type{A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_gradients(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tri3.jl:30.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_gradients-Union{Tuple{A2}, Tuple{A1}, Tuple{Tri6, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}, A2<:(AbstractArray{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_gradients","text":"shape_function_gradients(\n    e::Tri6,\n    _::Type{A1<:Union{StaticArraysCore.MMatrix, StaticArraysCore.SMatrix}},\n    ξ::AbstractArray{<:Number}\n) -> Any\n\n\nshape_function_gradients(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tri6.jl:48.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Tuple{ReferenceFE, Integer}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(e::ReferenceFE, i::Integer) -> Any\n\n\nReturns a specific quadrature point's shape function hessian indexed by q\n\nshape_function_hessians(e, i)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:133.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Tuple{ReferenceFE}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(e::ReferenceFE) -> Any\n\n\nReturns all shape function hessians\n\nshape_function_hessians(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:128.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Union{Tuple{A2}, Tuple{A1}, Tuple{Hex8, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(\n    e::Hex8,\n    _::Type{A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_hessians(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Hex8.jl:140.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Union{Tuple{A2}, Tuple{A1}, Tuple{Quad4, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(\n    e::Quad4,\n    _::Type{A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_hessians(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Quad4.jl:50.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Union{Tuple{A2}, Tuple{A1}, Tuple{Quad9, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(\n    e::Quad9,\n    _::Type{A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_hessians(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Quad9.jl:84.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Union{Tuple{A2}, Tuple{A1}, Tuple{Tet10, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(\n    e::Tet10,\n    _::Type{A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_hessians(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tet10.jl:151.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Union{Tuple{A2}, Tuple{A1}, Tuple{Tet4, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(\n    e::Tet4,\n    _::Type{A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_hessians(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tet4.jl:83.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Union{Tuple{A2}, Tuple{A1}, Tuple{Tri3, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(\n    e::Tri3,\n    _::Type{A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_hessians(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tri3.jl:41.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_hessians-Union{Tuple{A2}, Tuple{A1}, Tuple{Tri6, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_hessians","text":"shape_function_hessians(\n    e::Tri6,\n    _::Type{A1<:Union{StaticArraysCore.MArray, StaticArraysCore.SArray}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_hessians(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tri6.jl:71.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_values-Tuple{ReferenceFE, Int64}","page":"Home","title":"ReferenceFiniteElements.shape_function_values","text":"shape_function_values(e::ReferenceFE, i::Int64) -> Any\n\n\nReturns a specific quadrature point's shape function value indexed by q\n\nshape_function_values(e, i)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:113.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_values-Tuple{ReferenceFE}","page":"Home","title":"ReferenceFiniteElements.shape_function_values","text":"shape_function_values(e::ReferenceFE) -> Any\n\n\nReturns all shape function values\n\nshape_function_values(e)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/ReferenceFEs.jl:108.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_values-Union{Tuple{A2}, Tuple{A1}, Tuple{Quad4, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_values","text":"shape_function_values(\n    e::Quad4,\n    _::Type{A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_values(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Quad4.jl:18.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_values-Union{Tuple{A2}, Tuple{A1}, Tuple{Quad9, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_values","text":"shape_function_values(\n    e::Quad9,\n    _::Type{A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_values(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Quad9.jl:36.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_values-Union{Tuple{A2}, Tuple{A1}, Tuple{Tet10, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_values","text":"shape_function_values(\n    e::Tet10,\n    _::Type{A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_values(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tet10.jl:82.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_values-Union{Tuple{A2}, Tuple{A1}, Tuple{Tet4, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_values","text":"shape_function_values(\n    e::Tet4,\n    _::Type{A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_values(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tet4.jl:56.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_values-Union{Tuple{A2}, Tuple{A1}, Tuple{Tri3, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_values","text":"shape_function_values(\n    e::Tri3,\n    _::Type{A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_values(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tri3.jl:18.\n\n\n\n\n\n","category":"method"},{"location":"#ReferenceFiniteElements.shape_function_values-Union{Tuple{A2}, Tuple{A1}, Tuple{Tri6, Type{A1}, A2}} where {A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}, A2<:(AbstractVector{<:Number})}","page":"Home","title":"ReferenceFiniteElements.shape_function_values","text":"shape_function_values(\n    e::Tri6,\n    _::Type{A1<:Union{StaticArraysCore.SVector, StaticArraysCore.MVector}},\n    ξ::AbstractVector{<:Number}\n) -> Any\n\n\nshape_function_values(e, _, ξ)\n\ndefined at /home/runner/work/ReferenceFiniteElements.jl/ReferenceFiniteElements.jl/src/implementations/Tri6.jl:32.\n\n\n\n\n\n","category":"method"}]
}
